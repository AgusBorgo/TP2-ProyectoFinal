import express from 'express';
import router from './routes/router.js';
import logger from './middlewares/logger.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger);


app.use(router);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server ok in port http://localhost:${PORT}`);
});
