const { Router } = require('express');
const DoctorController = require('./controllers/DoctorController');
const routes = Router();

routes.post('/doctors', DoctorController.store);
routes.get('/doctors',DoctorController.index);
module.exports = routes;
