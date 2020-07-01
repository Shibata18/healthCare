'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
});

//Admin
Route.post('/sessions','UserController.login');//Login como administrador
Route.post('/user','UserController.store'); //Cadastro do Administrador
Route.resource('user','UserController').apiOnly().middleware('auth:jwt') // Metodo GET,UPDATE, GET/:id, apenas se tiver autenticado

//Pacientes
Route.post('/loginPaciente','PacienteController.login'); // Login como Paciente
Route.post('/paciente','PacienteController.store'); // Cadastro do Paciente
Route.resource('paciente','PacienteController');
Route.get('/perfilPaciente','PacienteController.perfil'); // Mostra apenas dados de um paciente especifico
Route.get('/agendaPaciente','AgendaController.agendaPaciente').middleware('auth:paciente,auth:jwt')


//Doctors
Route.post('/loginDoctor','DoctorController.login'); //Login como Doutor
Route.post('/doctor','DoctorController.store'); // Cadastro do Doutor
Route.resource('doctor','DoctorController');
Route.get('/perfilDoctor','DoctorController.perfil'); // Mostra apenas dados de um Doutor específico
Route.get('/agendaDoctor','AgendaController.agendaDoctor').middleware('auth:doctor,auth:jwt')


// Agenda
Route.resource('agenda', 'AgendaController').apiOnly().middleware('auth:doctor,auth:paciente,auth:jwt');
