import { DataSource } from "typeorm";
import { User } from "../models/user";

export const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "12345",
  database: "rating-db",
  entities: [User],
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
