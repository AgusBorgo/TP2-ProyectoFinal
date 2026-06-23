import { Router } from "express";
import filmController from "../containers/filmContainer.js";

const filmRoutes = Router();

filmRoutes.get("/", filmController.getAllFilms);
filmRoutes.get("/:id", filmController.getFilmById);
filmRoutes.post("/", filmController.createFilm);
filmRoutes.put("/:id", filmController.updateFilm);
filmRoutes.delete("/:id", filmController.deleteFilm);

export default filmRoutes;
