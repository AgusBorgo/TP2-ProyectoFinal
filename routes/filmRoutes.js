import { Router } from "express";
import filmController from "../containers/filmContainer.js";
import autenticar from "../middlewares/autenticar.js";

const filmRoutes = Router();

filmRoutes.get("/", filmController.getAllFilms);
filmRoutes.get("/:id", filmController.getFilmById);
filmRoutes.post("/", autenticar, filmController.createFilm); 
filmRoutes.put("/:id", autenticar, filmController.updateFilm);
filmRoutes.delete("/:id", autenticar, filmController.deleteFilm); 

export default filmRoutes;
