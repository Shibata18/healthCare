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

//Route.any('*', ({ view }) => view.render(Helpers.publicPath(__dirname,'client','build')))
Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
//ADMIN
Route.post('/sessions','SessionController.create');
Route.post('/user','UserController.store');
Route.resource('user','UserController').apiOnly().middleware('auth:jwt')
//Doctor
Route.post('/loginDoctor','LoginDoctorController.login');
Route.post('doctors','DoctorController.store')
Route.get('/agendaDoctor','LoginDoctorController.teste').middleware('auth:doctor,auth:jwt')
Route.resource('doctors', 'DoctorController')
  .apiOnly().middleware('auth:doctor,auth:jwt')
//Paciente
Route.post('/loginPaciente','LoginPacienteController.login');
Route.post("/paciente",'PacienteController.store')
Route.get('/agendaPaciente','PacienteController.agendaPaciente').middleware('auth:paciente,auth:jwt')
Route.resource('paciente', 'PacienteController')
  .apiOnly().middleware('auth:paciente,auth:jwt')
//Agenda
Route.resource('agenda', 'AgendaController')
    .apiOnly().middleware('auth:doctor,auth:paciente,auth:jwt')
Route.post('agenda/:id/file', 'FilController.store')
  .middleware('auth:doctor,auth:paciente,auth:jwt')
//Route.resource('chat','ChatController').apiOnly()
//Route.resource('files','FileController')
