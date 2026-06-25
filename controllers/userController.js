class UserController {
  constructor(service) {
    this.userService = service;
  }

  getAllUsers = async (req, res) => {
    try {
      const users = await this.userService.getAllUsers();
      res.status(200).send({ success: true, message: users });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await this.userService.getUserById(id);
      res.status(200).send({ success: true, message: user });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  createUser = async (req, res) => {
    try {
      const { name, email, password, roleId } = req.body;
      if (!name || !email || !password) throw new Error("Todos los campos son obligatorios");
      const user = await this.userService.createUser({ name, email, password, roleId });
      res.status(201).send({ success: true, message: user });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedUser = await this.userService.updateUser(id, req.body);
      res.status(200).send({ success: true, message: updatedUser });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await this.userService.deleteUser(id);
      res.status(200).send({ success: true, message: result });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await this.userService.login({ email, password });
      res.cookie("token", user.token, { httpOnly: true }); // cookie segura
      res.status(200).send({ success: true, message: { id: user.id, token: user.token } });
    } catch (error) {
      res.status(401).send({ success: false, message: error.message });
    }
  };

  me = async (req, res) => {
    try {
      const { token } = req.cookies;
      const user = await this.userService.me(token);
      res.status(200).send({ success: true, message: user });
    } catch (error) {
      res.status(401).send({ success: false, message: error.message });
    }
  };
}

export default UserController;
