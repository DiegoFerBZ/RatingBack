require('dotenv').config();
import { DataSource } from "typeorm";
import { User } from "../models/user";
import { Product } from "../models/product";
import { Comment } from "../models/comment";

export const dataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? +process.env.DB_PORT: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User,Product,Comment],
  synchronize: true,
});

export async function inicializarDB() {
  try {
    await dataSource.initialize();
    console.log("Conexión a la base de datos establecida exitosamente.");

    await dataSource.synchronize();
  } catch (error) {
    console.log("Error al conectar a la base de datos:", error);
  }
}
