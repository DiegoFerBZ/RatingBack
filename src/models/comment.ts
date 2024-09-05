import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Product } from "./product";
import { User } from "./user";

@Entity()
@Unique(['user', 'product'])
export class Comment {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  content!: string;

  @ManyToOne(() => User, (user) => user.comments)
  user!: User;

  @ManyToOne(() => Product, (product) => product.comments)
  product!: Product;
}