import { Film } from '../models/index.js';

export async function listFilms() {
  return await Film.findAll();
}

export async function getFilmById(id) {
  return await Film.findByPk(id);
}

export async function addFilm(film) {
  return await Film.create(film);
}

export async function updateFilm(id, data) {
  const film = await Film.findByPk(id);
  if (!film) return null;
  await film.update(data);
  return film;
}

export async function deleteFilm(id) {
  const film = await Film.findByPk(id);
  if (!film) return false;
  await film.destroy();
  return true;
}
