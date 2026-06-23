class ReservationService {
  constructor(reservation, film, user) {
    this.reservation = reservation;
    this.film = film;
    this.user = user;
  }

  getAllReservations = async () => {
    const reservations = await this.reservation.findAll({
      include: [
        { model: this.film },
        { model: this.user, attributes: ["id", "nombre", "dni"] },
      ],
      order: [["createdAt", "DESC"]],
    });
    return reservations;
  };

  getReservationById = async (id) => {
    const reservation = await this.reservation.findByPk(id, {
      include: [
        { model: this.film },
        { model: this.user, attributes: ["id", "nombre", "dni"] },
      ],
    });
    if (!reservation) throw new Error("Reserva no encontrada");
    return reservation;
  };

  getReservationsByUser = async (userId) => {
    const reservations = await this.reservation.findAll({
      where: { userId },
      include: [{ model: this.film }],
      order: [["createdAt", "DESC"]],
    });
    return reservations;
  };

  createReservation = async ({ filmId, userId, asientos }) => {
    if (!filmId) throw new Error("El filmId es requerido");
    if (!userId) throw new Error("El userId es requerido");
    if (!Array.isArray(asientos) || asientos.length === 0) {
      throw new Error("Debe enviar al menos un asiento");
    }

    // Validar que existan la pelicula y el usuario
    const film = await this.film.findByPk(filmId);
    if (!film) throw new Error("La pelicula no existe");

    const user = await this.user.findByPk(userId);
    if (!user) throw new Error("El usuario no existe");

    // Validar que los asientos no esten ocupados para esa pelicula
    const reservasExistentes = await this.reservation.findAll({
      where: { filmId },
    });
    const asientosOcupados = reservasExistentes.flatMap((r) => r.asientos);
    const choque = asientos.filter((s) => asientosOcupados.includes(s));
    if (choque.length > 0) {
      throw new Error(
        `Los siguientes asientos ya estan ocupados: ${choque.join(", ")}`,
      );
    }

    const reservation = await this.reservation.create({
      filmId,
      userId,
      asientos,
    });
    return reservation;
  };

  deleteReservation = async (id) => {
    const reservation = await this.reservation.findByPk(id);
    if (!reservation) throw new Error("Reserva no encontrada");
    await reservation.destroy();
    return { id };
  };
}

export default ReservationService;
