import express from 'express';
import routes from './routes';

import './database';

const app = express();

app.use(express.json());
app.use(routes);

const PORT = 3333;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🔥 Server started on port ${PORT}`);
});
