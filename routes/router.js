import { Router } from "express";
import userRoutes from "./userRoutes.js";
import filmRoutes from "./filmRoutes.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/films", filmRoutes);

export default router;
