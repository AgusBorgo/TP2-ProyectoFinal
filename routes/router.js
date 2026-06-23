import { Router } from "express";
import filmRoutes from "./filmRoutes.js";
import userRoutes from "./userRoutes.js";
import reservationRoutes from "./reservationRoutes.js";

const router = Router();

router.use("/films", filmRoutes);
router.use("/users", userRoutes);
router.use("/reservations", reservationRoutes);

export default router;
