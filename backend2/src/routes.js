const express = require('express');
const DoctorsController = require('./controllers/DoctorController');
const PacienteController = require('./controllers/PacienteController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

//Doctors
routes.get('/doctors',DoctorsController.index);
routes.post('/doctors',DoctorsController.create);
routes.delete('/doctors',DoctorsController.delete);
routes.put('/doctors',DoctorsController.update);
//Login
routes.post('/session',SessionController.create);
//Pacientes
routes.post('/pacientes',PacienteController.create);
routes.get('/pacientes',PacienteController.index);
routes.put('/pacientes',PacienteController.update);
routes.delete('/pacientes',PacienteController.delete);
module.exports = routes;
