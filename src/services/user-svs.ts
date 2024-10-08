import { dataSource } from "../infrastructure/db-postgres";
import { BussinesException } from "../middlewares/exceptions/bussinesException";
import { User } from "../models/user";

class UserService {
  userRepository = dataSource.getRepository(User);

  async registerNewUser(
    name: string,
    email: string,
    password: string,
    lastname: string,
    username: string
  ): Promise<User> {
    const newUser: User = { name, email, password, lastname, username };
    try {
      return await this.userRepository.save(newUser);
    } catch (error) {
      if ((error as any).code === '23505') { 
        throw new BussinesException('El usuario o correo ya existe', 400);
      }
      // Otros errores de base de datos
      throw new BussinesException('Error al registrar usuario', 500);
    }
  }

  async getUserByEmail(email: string): Promise<User> {
    const user=await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new BussinesException('Usuario no registrado', 404);
    }
    return user;
  }

  async getUserById(id: number): Promise<User> {
    const user=await this.userRepository.
    createQueryBuilder('user')
    .select([
      'user.id',
      'user.username',
      'user.email',
      'user.lastname',
      'user.name',
      'user.fecha_Eliminacion',
    ])
    .where('user.id = :id', { id })
    .getOne();
    if (!user) {
      throw new BussinesException('Usuario no registrado', 404);
    }
    return user;
  }

  async editUser(user: User): Promise<void> {
    try{
    await this.userRepository.save(user);
  } catch (error) {
    if ((error as any).code === '23505') { 
      throw new BussinesException('El username ya existe', 400);
    }
    // Otros errores de base de datos
    throw new BussinesException('Error al editar el usuario', 500);
  }
  }
}

export default new UserService();
