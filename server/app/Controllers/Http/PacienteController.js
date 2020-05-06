'use strict'
const Paciente = use('App/Models/Paciente')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with pacientes
 */
class PacienteController {
  /**
   * Show a list of all pacientes.
   * GET pacientes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const paciente = Paciente.all();

    return paciente;
  }

  /**
   * Render a form to be used for creating a new paciente.
   * GET pacientes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   *
  async create ({ request, response, view }) {
  }*/

  /**
   * Create/save a new paciente.
   * POST pacientes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(['cpfPaciente', 'namePaciente', 'email', 'password', 'telefonePaciente']);

    const paciente = await Paciente.create(data);

    return paciente;
  }

  /**
   * Display a single paciente.
   * GET pacientes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async agendaPaciente ({ params, request, response, view }) {
    const user = await Paciente.findByOrFail("cpfPaciente",request.body.cpfPaciente)
    await user.load('agendaPaciente');
    return user
  }

  /**
   * Render a form to update an existing paciente.
   * GET pacientes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   *
  async edit ({ params, request, response, view }) {
  }*/

  /**
   * Update paciente details.
   * PUT or PATCH pacientes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const paciente = await Paciente.findOrFail(params.id)

    const data = request.only([
      'namePaciente',
       'email',
       'password',
      'telefonePaciente',
      'ativo_paciente'
    ])

    paciente.merge(data)

    await paciente.save()

    return paciente
  }

  /**
   * Delete a paciente with id.
   * DELETE pacientes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   *
  async destroy ({ params, request, response }) {
  }*/
   async perfil({request}){
    const user = await Paciente.findByOrFail("cpfPaciente",request.header("perfil"));
    return user
  } 
  async agendaPaciente({request}){
    const user = await Paciente.findByOrFail("cpfPaciente",request.header("agenda"))
    await user.load('agendaPaciente');
    return user
  }
}

module.exports = PacienteController
