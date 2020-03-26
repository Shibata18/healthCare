const express = require('express');
const DoctorsController = require('./controllers/DoctorController');
const routes = express.Router();

routes.get('/doctors',DoctorsController.index);
routes.post('/doctors',DoctorsController.create);
routes.delete('/doctors',DoctorsController.delete);
routes.put('/doctors',DoctorsController.update);
module.exports = routes;
