class FilmService {
  constructor(filmModel) {
    this.film = filmModel;
  }

  async getAllFilms() {
    return await this.film.findAll({
      attributes: ["id", "titulo", "genero", "horario", "duracion"],
    });
  }

  async getFilmById(id) {
    return await this.film.findOne({
      where: { id },
      attributes: ["id", "titulo", "genero", "horario", "duracion"],
    });
  }

  async createFilm({ titulo, genero, horario, duracion }) {
    return await this.film.create({ titulo, genero, horario, duracion });
  }

  async updateFilm(id, data) {
    const film = await this.film.findByPk(id);
    if (!film) throw new Error("Película no encontrada");
    return await film.update(data);
  }

  async deleteFilm(id) {
    const film = await this.film.findByPk(id);
    if (!film) throw new Error("Película no encontrada");
    await film.destroy();
    return { message: "Película eliminada correctamente" };
  }
}

export default FilmService;
