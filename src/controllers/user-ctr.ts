import { Request, Response, NextFunction } from 'express';
import userSvs from '../services/user-svs'; 
import { CatcherException } from '../tools/decorators/catcherException';

class UserController {

  @CatcherException
  public async registerUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { name, email, password, lastname, username } = req.body;
    const newUser = await userSvs.registerNewUser(name, email, password, lastname, username);
    res.json(newUser);
  }
}

export default new UserController();
