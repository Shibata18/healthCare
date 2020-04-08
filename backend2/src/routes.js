const express = require('express');
const DoctorsController = require('./controllers/DoctorController');
const PacienteController = require('./controllers/PacienteController');
const SessionController = require('./controllers/SessionController');
const SessionPacienteController = require('./controllers/SessionPacienteController');
const routes = express.Router();

//Doctors
routes.get('/doctors',DoctorsController.index);
routes.post('/doctors',DoctorsController.create);
routes.delete('/doctors',DoctorsController.delete);
routes.put('/doctors',DoctorsController.update);
//Login
routes.post('/session',SessionController.create);
routes.post('/sessionPaciente',SessionPacienteController.create);
//Pacientes
routes.post('/pacientes',PacienteController.create);
routes.get('/pacientes',PacienteController.index);
routes.put('/pacientes',PacienteController.update);
routes.delete('/pacientes',PacienteController.delete);
module.exports = routes;
