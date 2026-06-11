import { Router } from "express";
import * as filmController from '../controllers/filmController.js';

const filmRouter = Router();

filmRouter.get("/", filmController.getAllFilms);
filmRouter.get("/:id", filmController.getFilmById);
filmRouter.post("/", filmController.createFilm);
filmRouter.put("/:id", filmController.updateFilm);
filmRouter.delete("/:id", filmController.deleteFilm);

export default filmRouter;
