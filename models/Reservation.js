import { DataTypes, Model } from "sequelize";
import sequelize from "../connection/sequelize.js";

class Reservation extends Model {}

Reservation.init(
  {
    filmId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    asientos: {
      // Array nativo de Postgres para los asientos: ["A1", "A2", "B3"]
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Reservation",
  },
);

export default Reservation;
