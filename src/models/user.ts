import { Exclude, Expose } from "class-transformer";
import { Column, Entity, OneToMany } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product";
import { Comment } from "./comment";

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ type: 'int' })
  id?: number=0;

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

  @OneToMany(() => Product, (product) => product.user)
  products?: Product[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments?: Comment[];

}
