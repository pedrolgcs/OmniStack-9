import { Router } from 'express';
import multer from 'multer';
// configs
import multerConfig from './config/multer';
// controllers
import SessionController from './app/controllers/SessionController';
import SpotController from './app/controllers/SpotController';
import DashboardController from './app/controllers/DashboardController';
import BookingController from './app/controllers/BookingController';

const routes = new Router();
const upload = multer(multerConfig);

// index
routes.get('/', (req, res) => res.json({ message: 'Enjoy the silence!' }));

// session
routes.post('/sessions', SessionController.store);

// spots
routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

// Dashboard
routes.get('/dashboard', DashboardController.show);

// Booking
routes.post('/spots/:spot_id/bookings', BookingController.store);

export default routes;
