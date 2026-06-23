import { DataTypes, Model } from "sequelize";
import sequelize from "../connection/sequelize.js";

class User extends Model {}

User.init(
  {
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        len: [3, 100],
      },
    },
    dni: {
      type: DataTypes.STRING(8),
      allowNull: false,
      unique: true,
      validate: {
        is: /^\d{7,8}$/,
      },
    },
    esAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "User",
  },
);

export default User;
