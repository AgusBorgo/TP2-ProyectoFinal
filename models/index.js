import { Sequelize } from "sequelize";
import User from "./User.js";
import Film from "./Film.js";

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: "mssql",
});

User.belongsToMany(Film, {
  through: "UserFilms",
  foreignKey: "userId",
});
Film.belongsToMany(User, {
  through: "UserFilms",
  foreignKey: "filmId",
});

export { sequelize,User, Film };
