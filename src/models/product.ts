import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn({ type: 'int' })
  id?: number=0;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  review!:string;

  @Column()
  url_img!: string;

  @Column('int')
  rating!: number;
  
  @ManyToOne(() => User, (user) => user.products, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user!: User;

}