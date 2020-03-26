const express = require('express');
const DoctorsController = require('./controllers/DoctorController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.get('/doctors',DoctorsController.index);
routes.post('/doctors',DoctorsController.create);
routes.delete('/doctors',DoctorsController.delete);
routes.put('/doctors',DoctorsController.update);
routes.post('/session',SessionController.create);
module.exports = routes;
