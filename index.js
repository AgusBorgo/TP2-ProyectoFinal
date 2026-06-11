import express from 'express';
import 'dotenv/config';

import router from './routes/router.js';
import logger from './middlewares/logger.js';
import errorHandler from './middlewares/errorHandler.js';
import { sequelize } from './models/index.js';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger);

app.use(router);

app.use(errorHandler);

// Conectar a la base de datos y arrancar el servidor
async function start() {
  try {
    await sequelize.authenticate();
    console.log('Conexion a PostgreSQL exitosa');

    await sequelize.sync();
    console.log('Tablas sincronizadas');

    app.listen(PORT, () => {
      console.log(`Server ok in port http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('No se pudo iniciar el servidor:', err.message);
  }
}

start();
