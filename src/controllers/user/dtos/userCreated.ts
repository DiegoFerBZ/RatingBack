import { Exclude, Expose } from "class-transformer";

export class UserCreatedDTO {
  @Exclude()
  id_usuario?: number;

  @Expose()
  name?: string;

  @Expose()
  email?: string;

  @Expose()
  lastname?: string;

  @Expose()
  username?: string;

  @Exclude()
  password!: string;
}
