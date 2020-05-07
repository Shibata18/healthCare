const express = require('express');
const DoctorsController = require('./controllers/DoctorController');
const PacienteController = require('./controllers/PacienteController');
const SessionController = require('./controllers/SessionController');
const SessionPacienteController = require('./controllers/SessionPacienteController');
const AgendaController = require('./controllers/AgendaController');
const ProntuarioController = require('./controllers/ProntuarioController');
const FilesController = require('./controllers/FilesController');
const multer = require("multer");
const multerConfig = require('./config/multer')
const connection = require("./database/connection");
const routes = express.Router();

//Multer
routes.post('/posts', multer(multerConfig).single('file'), async (req, res) => {
    const { descricao, cpf_medico_fk, cpf_paciente_fk } = req.body;
    const { originalname: name, size, key, location: url = "" } = req.file;
    const post = await connection('files').insert({ descricao, cpf_medico_fk, cpf_paciente_fk, name, size, key, url });
    console.log(req.file);
    return res.json(post)
})
routes.get('/posts', FilesController.index)
//Doctors
routes.get('/doctors', DoctorsController.index);
routes.post('/doctors', DoctorsController.create);
routes.delete('/doctors', DoctorsController.delete);
routes.put('/doctors', DoctorsController.update);
//Login
routes.post('/session', SessionController.create);
routes.post('/sessionPaciente', SessionPacienteController.create);
//Pacientes
routes.post('/pacientes', PacienteController.create);
routes.get('/pacientes', PacienteController.index);
routes.put('/pacientes', PacienteController.update);
routes.delete('/pacientes', PacienteController.delete);
//Agenda
routes.get("/agenda", AgendaController.index);
routes.post("/agenda", AgendaController.create);
routes.put("/agenda", AgendaController.update);
routes.delete("/agenda", AgendaController.delete);
// Prontuario
routes.get("/prontuario", ProntuarioController.index);
routes.post("/prontuario", ProntuarioController.create);
routes.put("/prontuario", ProntuarioController.update);
routes.delete("/prontuario", ProntuarioController.delete);
module.exports = routes;
