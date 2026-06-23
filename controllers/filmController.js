class FilmController {
  constructor(service) {
    this.filmService = service;
  }

  getAllFilms = async (req, res) => {
    try {
      const films = await this.filmService.getAllFilms();
      res.status(200).send({ success: true, message: films });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getFilmById = async (req, res) => {
    try {
      const { id } = req.params;
      const film = await this.filmService.getFilmById(id);
      res.status(200).send({ success: true, message: film });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  createFilm = async (req, res) => {
    try {
      const { titulo, genero, horario, duracion } = req.body;
      const film = await this.filmService.createFilm({
        titulo,
        genero,
        horario,
        duracion,
      });
      res.status(201).send({ success: true, message: film });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  updateFilm = async (req, res) => {
    try {
      const { id } = req.params;
      const film = await this.filmService.updateFilm(id, req.body);
      res.status(200).send({ success: true, message: film });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deleteFilm = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await this.filmService.deleteFilm(id);
      res.status(200).send({ success: true, message: result });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default FilmController;
