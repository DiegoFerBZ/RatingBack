import { Request, Response, NextFunction } from "express";
import userSvs from "../../services/user-svs";
import { CatcherException } from "../../tools/decorators/catcherException";
import {
  hashPassword,
  verifyPassword,
} from "../../tools/utils/password-encrpyt";
import { plainToClass } from "class-transformer";
import { generateToken } from "../../tools/utils/json-token";
import { BussinesException } from "../../middlewares/exceptions/bussinesException";

@CatcherException
class UserController {
  public async registerUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { name, email, password, lastname, username } = req.body;
    await userSvs.registerNewUser(
      name,
      email,
      await hashPassword(password),
      lastname,
      username
    );

    // Enviar la respuesta
    res.status(201).json("Usuario registrado con éxito");
  }

  public async loginUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { email, password } = req.body;
    const user = await userSvs.getUserByEmail(email);

    if (user.fecha_Eliminacion) {
      res.status(401).json("Usuario eliminado");
      return;
    }

    // Validar contraseña
    const isValidPassword = await verifyPassword(password, user.password);
    if (!isValidPassword) {
      throw new BussinesException("Credenciales incorrectas", 401);
    }

    const token = generateToken(user);
    res.json({ token });
  }

  public async getUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const user_id: number = Number(req.user?.id ?? 0);
    const { id, username, email, name, lastname } = await userSvs.getUserById(
      user_id
    );
    res.json({ id, username, email, name, lastname });
  }

  public async editUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const user_id: number = Number(req.user?.id ?? 0);
    const user = await userSvs.getUserById(user_id);
    if (user.fecha_Eliminacion) {
      res.status(401).json("Usuario eliminado");
      return;
    }
    const {
      name,
      lastname,
      username,
    }: { name: string; lastname: string; username: string } = req.body;
    user.name = name.length > 1 ? name : user.name;
    user.lastname = lastname.length > 1 ? lastname : user.lastname;
    user.username = username.length > 1 ? username : user.username;
    await userSvs.editUser(user);
    res.json("Usuario actualizado con éxito");
  }

  public async deleteUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const user_id: number = Number(req.user?.id ?? 0);
    const user = await userSvs.getUserById(user_id);
    if (user.fecha_Eliminacion) {
      res.status(401).json("Usuario eliminado");
      return;
    }
    user.fecha_Eliminacion = new Date();
    await userSvs.editUser(user);
    res.json("Usuario eliminado con éxito");
  }
}

export default new UserController();
