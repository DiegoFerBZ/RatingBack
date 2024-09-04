import { Column, Entity } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn({ type: 'int' })
  id_product?: number=0;

  @Column({ unique: true })
  name!: string;

  @Column({ unique: true })
  description!: string;

  @Column({ unique: true })
  url_img!: string;

  @Column()
  createdAt!: string;

}