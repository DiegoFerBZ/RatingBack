import { Exclude, Expose } from "class-transformer";
import { Column, Entity } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ type: 'int' })
  id_usuario?: number=0;

  @Column({ unique: true })
  @Expose()
  username!: string;

  @Column({ unique: true })
  @Expose()
  email!: string;

  @Column()
  @Exclude()
  password!: string;

  @Column()
  @Expose()
  name!: string;

  @Column()
  @Expose()
  lastname!: string;

}
