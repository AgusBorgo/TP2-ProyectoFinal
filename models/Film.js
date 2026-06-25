import { DataTypes, Model } from "sequelize";
import sequelize from "../connection/sequelize.js";

class Film extends Model {
  static isLongMovie(duracion) {
    return duracion > 120; 
  }
}

Film.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
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
      validate: {
        is: /^([01]\d|2[0-3]):([0-5]\d)$/, 
      },
    },
    duracion: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
      },
    },
  },
  {
    sequelize, 
    modelName: "Film",
    tableName: "films",
    timestamps: true, 
  }
);

export default Film;
