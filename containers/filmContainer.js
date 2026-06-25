import FilmController from "../controllers/filmController.js";
import { Film } from "../models/index.js";
import FilmService from "../services/FilmService.js";

const filmService = new FilmService(Film);
const filmController = new FilmController(filmService);

export default filmController;
