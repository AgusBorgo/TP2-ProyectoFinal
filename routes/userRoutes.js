import { Router } from "express";
import userController from "../containers/userContainer.js";

const userRoutes = Router();

userRoutes.get("/", userController.getAllUsers);
userRoutes.get("/dni/:dni", userController.getUserByDni);
userRoutes.get("/:id", userController.getUserById);
userRoutes.post("/", userController.createUser);
userRoutes.put("/:id", userController.updateUser);
userRoutes.delete("/:id", userController.deleteUser);

export default userRoutes;
