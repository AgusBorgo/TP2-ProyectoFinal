import { DataTypes, Model } from "sequelize";
import sequelize from "../connection/sequelize.js";
import bcrypt from "bcrypt";

class User extends Model {
  static async validatePassword(passwordPlain, passwordHash) {
    return await bcrypt.compare(passwordPlain, passwordHash);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [3, 50], 
        is: /^[a-z]+$/i, 
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roleId: {
      type: DataTypes.INTEGER,
      defaultValue: 2,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: true, 
 },

);

User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
});

export default User;
