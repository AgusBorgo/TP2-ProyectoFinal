import UserController from "../controllers/UserController.js";
import { User, Reservation, Film } from "../Models/index.js";
import UserService from "../services/userService.js";

const userService = new UserService(User, Reservation, Film);
const userController = new UserController(userService);

export default userController;
