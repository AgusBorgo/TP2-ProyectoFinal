import FilmController from "../controllers/FilmController.js";
import { Film } from "../Models/index.js";
import FilmService from "../services/filmService.js";

const filmService = new FilmService(Film);
const filmController = new FilmController(filmService);

export default filmController;
