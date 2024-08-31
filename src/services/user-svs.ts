import { dataSource } from "../infrastructure/db-postgres";
import { User } from "../models/user";

class UserService {
  userRepository = dataSource.getRepository(User);

  registerNewUser(
    name: string,
    email: string,
    password: string,
    lastname: string,
    username: string
  ): Promise<User> {
    const newUser: User = { name, email, password, lastname, username };
    return this.userRepository.save(newUser);
  }
}

export default new UserService();
