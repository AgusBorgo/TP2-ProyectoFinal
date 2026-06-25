import { Sequelize } from "sequelize";
import {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_DIALECT,
} from "../config/config.js";

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT,
  logging: false,
});

try {
  await sequelize.authenticate();
  console.log("Conexión establecida correctamente.");
} catch (error) {
  console.error("Error al conectar con la base de datos:", error);
}

export default sequelize;
