import Film from "./Film.js";
import User from "./User.js";
import Reservation from "./Reservation.js";

// Relaciones
// Un usuario tiene muchas reservas
User.hasMany(Reservation, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});
Reservation.belongsTo(User, {
  foreignKey: "userId",
});

// Una pelicula tiene muchas reservas
Film.hasMany(Reservation, {
  foreignKey: "filmId",
  onDelete: "CASCADE",
});
Reservation.belongsTo(Film, {
  foreignKey: "filmId",
});

export { Film, User, Reservation };
