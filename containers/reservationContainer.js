import ReservationController from "../controllers/ReservationController.js";
import { Reservation, Film, User } from "../Models/index.js";
import ReservationService from "../services/reservationService.js";

const reservationService = new ReservationService(Reservation, Film, User);
const reservationController = new ReservationController(reservationService);

export default reservationController;
