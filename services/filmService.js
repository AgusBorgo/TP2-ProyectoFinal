class FilmService {
  constructor(film) {
    this.film = film;
  }

  getAllFilms = async () => {
    const films = await this.film.findAll({
      order: [["titulo", "ASC"]],
    });
    return films;
  };

  getFilmById = async (id) => {
    const film = await this.film.findByPk(id);
    if (!film) throw new Error("Pelicula no encontrada");
    return film;
  };

  createFilm = async ({ titulo, genero, horario, duracion }) => {
    if (!titulo) throw new Error("El titulo es requerido");
    if (!genero) throw new Error("El genero es requerido");
    const film = await this.film.create({ titulo, genero, horario, duracion });
    return film;
  };

  updateFilm = async (id, data) => {
    const film = await this.film.findByPk(id);
    if (!film) throw new Error("Pelicula no encontrada");
    await film.update(data);
    return film;
  };

  deleteFilm = async (id) => {
    const film = await this.film.findByPk(id);
    if (!film) throw new Error("Pelicula no encontrada");
    await film.destroy();
    return { id };
  };
}

export default FilmService;
