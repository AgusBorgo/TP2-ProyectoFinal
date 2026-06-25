import { Router } from "express";
import userController from "../containers/userContainer.js";
import autenticar from "../middlewares/autenticar.js"; 

const userRoutes = Router();

userRoutes.get("/", userController.getAllUsers);
userRoutes.get("/me", autenticar, userController.me); 
userRoutes.get("/:id", userController.getUserById);
userRoutes.post("/login", userController.login);
userRoutes.post("/", userController.createUser);
userRoutes.put("/:id", userController.updateUser);
userRoutes.delete("/:id", userController.deleteUser);

export default userRoutes;
