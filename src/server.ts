import express from 'express';

const app = express();

app.get('/', (request, response) =>
  response.json({
    data: {
      message: 'Hey',
    },
  }),
);

const PORT = 3333;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🔥 Server started on port ${PORT}`);
});
