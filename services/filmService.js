let films = [
  { id: 1, titulo: "Avengers: Endgame", genero: "Acción" },
  { id: 2, titulo: "Toy Story 4", genero: "Animación" }
];

export function listFilms() {
  return films;
}

export function addFilm(film) {
  film.id = films.length + 1;
  films.push(film);
  return film;
}
