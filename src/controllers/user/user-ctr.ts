import { Request, Response, NextFunction } from 'express';
import userSvs from '../../services/user-svs'; 
import { CatcherException } from '../../tools/decorators/catcherException';
import { hashPassword } from '../../tools/utils/password-encrpyt';
import { plainToClass} from 'class-transformer';
import { UserCreatedDTO } from './dtos/userCreated';


@CatcherException
class UserController {


  public async registerUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { name, email, password, lastname, username } = req.body;
    const newUser = await userSvs.registerNewUser(name, email, await hashPassword(password), lastname, username);
    // Convertir la entidad a un objeto plano
    const userDTO = plainToClass(UserCreatedDTO, newUser)

    // Enviar la respuesta
    res.json(userDTO);

  }
  
}

export default new UserController();
