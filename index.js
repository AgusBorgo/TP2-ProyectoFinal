import express from "express";
import morgan from "morgan";
import router from "./routes/router.js";
import { notFound } from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";
import sequelize from "./connection/sequelize.js";
import { SERVER_PORT } from "./config/config.js";

// Importar los modelos para que se registren las relaciones
import "./Models/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(router);

await sequelize.sync({ alter: false });

app.use(notFound);
app.use(errorHandler);

app.listen(SERVER_PORT, () => {
  console.log(`Server ok in port http://localhost:${SERVER_PORT}`);
});
