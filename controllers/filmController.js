import * as filmService from '../services/filmService.js';

export async function getAllFilms(req, res) {
  const films = await filmService.listFilms();
  res.json(films);
}

export async function getFilmById(req, res) {
  const film = await filmService.getFilmById(req.params.id);
  if (!film) {
    return res.status(404).json({ error: 'Pelicula no encontrada' });
  }
  res.json(film);
}

export async function createFilm(req, res) {
  const film = await filmService.addFilm(req.body);
  res.status(201).json({ mensaje: "Película creada", film });
}

export async function updateFilm(req, res) {
  const film = await filmService.updateFilm(req.params.id, req.body);
  if (!film) {
    return res.status(404).json({ error: 'Pelicula no encontrada' });
  }
  res.json({ mensaje: 'Pelicula actualizada', film });
}

export async function deleteFilm(req, res) {
  const ok = await filmService.deleteFilm(req.params.id);
  if (!ok) {
    return res.status(404).json({ error: 'Pelicula no encontrada' });
  }
  res.status(204).send();
}
