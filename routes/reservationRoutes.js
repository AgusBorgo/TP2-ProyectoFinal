import { Router } from "express";
import reservationController from "../containers/reservationContainer.js";

const reservationRoutes = Router();

reservationRoutes.get("/", reservationController.getAllReservations);
reservationRoutes.get(
  "/user/:userId",
  reservationController.getReservationsByUser,
);
reservationRoutes.get("/:id", reservationController.getReservationById);
reservationRoutes.post("/", reservationController.createReservation);
reservationRoutes.delete("/:id", reservationController.deleteReservation);

export default reservationRoutes;
