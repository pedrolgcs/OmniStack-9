import { Router } from 'express';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

// index
routes.get('/', (req, res) => res.json({ message: 'Enjoy the silence!' }));

// session
routes.post('/sessions', SessionController.store);

export default routes;
