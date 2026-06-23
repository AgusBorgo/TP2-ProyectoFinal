class UserService {
  constructor(user, reservation, film) {
    this.user = user;
    this.reservation = reservation;
    this.film = film;
  }

  getAllUsers = async () => {
    const users = await this.user.findAll({
      attributes: ["id", "nombre", "dni", "esAdmin"],
      order: [["nombre", "ASC"]],
    });
    return users;
  };

  getUserById = async (id) => {
    const user = await this.user.findByPk(id, {
      attributes: ["id", "nombre", "dni", "esAdmin"],
      include: [
        {
          model: this.reservation,
          include: [{ model: this.film }],
        },
      ],
    });
    if (!user) throw new Error("Usuario no encontrado");
    return user;
  };

  getUserByDni = async (dni) => {
    const user = await this.user.findOne({
      where: { dni },
      attributes: ["id", "nombre", "dni", "esAdmin"],
    });
    if (!user) throw new Error("Usuario no encontrado");
    return user;
  };

  createUser = async ({ nombre, dni, esAdmin }) => {
    if (!nombre) throw new Error("El nombre es requerido");
    if (!dni) throw new Error("El DNI es requerido");
    const user = await this.user.create({ nombre, dni, esAdmin });
    return user;
  };

  updateUser = async (id, data) => {
    const user = await this.user.findByPk(id);
    if (!user) throw new Error("Usuario no encontrado");
    await user.update(data);
    return user;
  };

  deleteUser = async (id) => {
    const user = await this.user.findByPk(id);
    if (!user) throw new Error("Usuario no encontrado");
    await user.destroy();
    return { id };
  };
}

export default UserService;
