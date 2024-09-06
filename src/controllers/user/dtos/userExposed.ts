import { Exclude, Expose } from "class-transformer";

export class UserExposedDTO {
  @Expose()
  id?: number;

  @Exclude()
  name?: string;

  @Exclude()
  email?: string;

  @Exclude()
  lastname?: string;

  @Expose()
  username?: string;

  @Exclude()
  password!: string;
}
