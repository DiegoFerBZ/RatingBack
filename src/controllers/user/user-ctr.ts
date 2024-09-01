import { Request, Response, NextFunction } from 'express';
import userSvs from '../../services/user-svs'; 
import { CatcherException } from '../../tools/decorators/catcherException';
import { hashPassword,verifyPassword } from '../../tools/utils/password-encrpyt';
import { plainToClass} from 'class-transformer';
import { UserCreatedDTO } from './dtos/userCreated';
import { generateToken } from '../../tools/utils/json-token';
import { BussinesException } from '../../middlewares/exceptions/bussinesException';


@CatcherException
class UserController {

  
  public async registerUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { name, email, password, lastname, username } = req.body;
    const newUser = await userSvs.registerNewUser(name, email, await hashPassword(password), lastname, username);
    const userDTO = plainToClass(UserCreatedDTO, newUser)

    // Enviar la respuesta
    res.json(userDTO);
  }

  public async loginUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { email, password } = req.body;
    const user = await userSvs.getUserByEmail(email);

    // Validar contraseña
    const isValidPassword = await verifyPassword(password, user.password);
    if (!isValidPassword) {
      throw new BussinesException('Credenciales incorrectas', 401);
    }

    const token = generateToken(user);
    res.json({ token });
  }
  
}

export default new UserController();
