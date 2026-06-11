import * as filmService from '../services/filmService.js';

export function getAllFilms(req, res) {
  const films = filmService.listFilms();
  res.json(films);
}

export function createFilm(req, res) {
  const film = filmService.addFilm(req.body);
  res.json({ mensaje: "Película creada", film });
}
