import { generateToken, verifyToken } from "../utils/jwt.js";

class UserService {
  constructor(userModel, filmModel) {
    this.user = userModel;
    this.film = filmModel;
  }

  async getAllUsers() {
    return await this.user.findAll({
      attributes: ["id", "name", "email", "roleId"],
    });
  }

  async getUserById(id) {
    return await this.user.findOne({
      where: { id },
      attributes: ["id", "name", "email", "roleId"],
    });
  }

  async createUser({ name, email, password, roleId }) {
    return await this.user.create({ name, email, password, roleId });
  }

  async login({ email, password }) {
    const user = await this.user.findOne({
      where: { email },
      attributes: ["id", "name", "email", "password", "roleId"],
    });
    if (!user) throw new Error("Usuario no encontrado");

    const validatePassword = await this.user.validatePassword(
      password,
      user.password
    );
    if (!validatePassword) throw new Error("Contraseña inválida");

    const payload = {
      id: user.id,
      name: user.name,
      roleId: user.roleId,
    };

    const token = generateToken(payload);
    return { token, id: user.id };
  }

  async me(token) {
    return verifyToken(token);
  }
}

export default UserService;
