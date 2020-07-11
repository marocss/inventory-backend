import { Router } from 'express';

const usersRouter = Router();

usersRouter.post('/', (request, response) => {
  const { name, email, password } = request.body;

  return response.send();
});

export default usersRouter;
