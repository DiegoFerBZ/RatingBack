import { DataSource } from "typeorm";
import { User } from "../models/user";
import { Product } from "../models/product";
import { Comment } from "../models/comment";

export const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "test",
  database: "rating-db",
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
