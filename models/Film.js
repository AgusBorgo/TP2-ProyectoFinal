import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Film = sequelize.define(
  'Film',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    titulo: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    genero: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    horario: {
      type: DataTypes.STRING(5)
    },
    duracion: {
      type: DataTypes.INTEGER
    }
  },
  {
    tableName: 'films',
    timestamps: true
  }
);

export default Film;
