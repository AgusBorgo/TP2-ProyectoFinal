class ReservationController {
  constructor(service) {
    this.reservationService = service;
  }

  getAllReservations = async (req, res) => {
    try {
      const reservations = await this.reservationService.getAllReservations();
      res.status(200).send({ success: true, message: reservations });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getReservationById = async (req, res) => {
    try {
      const { id } = req.params;
      const reservation = await this.reservationService.getReservationById(id);
      res.status(200).send({ success: true, message: reservation });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getReservationsByUser = async (req, res) => {
    try {
      const { userId } = req.params;
      const reservations = await this.reservationService.getReservationsByUser(
        userId,
      );
      res.status(200).send({ success: true, message: reservations });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  createReservation = async (req, res) => {
    try {
      const { filmId, userId, asientos } = req.body;
      const reservation = await this.reservationService.createReservation({
        filmId,
        userId,
        asientos,
      });
      res.status(201).send({ success: true, message: reservation });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deleteReservation = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await this.reservationService.deleteReservation(id);
      res.status(200).send({ success: true, message: result });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default ReservationController;
