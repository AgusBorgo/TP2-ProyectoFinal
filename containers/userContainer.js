import UserController from "../controllers/userController.js";
import { User } from "../models/index.js";
import UserService from "../services/UserService.js";

const userService = new UserService(User);
const userController = new UserController(userService);

export default userController;
