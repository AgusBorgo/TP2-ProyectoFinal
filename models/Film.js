import { DataTypes, Model } from "sequelize";
import sequelize from "../connection/sequelize.js";

class Film extends Model {}

Film.init(
  {
    titulo: {
      type: DataTypes.STRING(150),
      allowNull: false,
      validate: {
        len: [1, 150],
      },
    },
    genero: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    horario: {
      type: DataTypes.STRING(5),
    },
    duracion: {
      type: DataTypes.INTEGER,
      validate: { min: 1 },
    },
  },
  {
    sequelize,
    modelName: "Film",
  },
);

export default Film;
