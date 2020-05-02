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
Route.post('/sessions/:id','SessionController.login');
Route.post('/sessions','SessionController.create');
Route.resource('user','UserController').apiOnly()
Route.resource('doctors', 'DoctorController')
  .apiOnly().middleware('auth')
Route.resource('paciente', 'PacienteController')
  .apiOnly().middleware('auth')
Route.resource('agenda', 'AgendaController')
  .apiOnly().middleware('auth')
//Route.resource('chat','ChatController').apiOnly()
//Route.resource('files','FileController')
