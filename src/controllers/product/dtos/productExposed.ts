import { Exclude, Expose, Type } from 'class-transformer';
import { UserExposedDTO } from '../../user/dtos/userExposed';

export class ProductCreatedDTO {
  @Expose()
  id!: number;

  @Expose()
  name!: string;

  @Expose()
  description!: string;

  @Expose()
  url_img!: string;

  @Expose()
  review!: string;

  @Exclude()
  @Type(() => UserExposedDTO)
  user!: UserExposedDTO;
}
