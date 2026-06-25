import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";

import router from "./routes/router.js";
import logger from "./middlewares/logger.js";
import errorHandler from "./middlewares/errorHandler.js";
import { sequelize } from "./models/index.js";

const app = express();
const PORT = process.env.PORT || 8000;

// Middlewares básicos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(logger);


app.use("/api", router);

app.use(errorHandler);

async function start() {
  try {
    await sequelize.authenticate();
    console.log("Conexión a PostgreSQL exitosa");

    await sequelize.sync();
    console.log("Tablas sincronizadas");

    app.listen(PORT, () => {
      console.log(` Server corriendo en http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(" No se pudo iniciar el servidor:", err.message);
  }
}

start();
