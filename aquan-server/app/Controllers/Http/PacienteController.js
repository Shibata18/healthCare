'use strict'
const Paciente = use('App/Models/Paciente')
const Database = use('Database')
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
  async index({ request, response, view }) {
    const paciente = Paciente.query().with('agendaPaciente').fetch();

    return paciente;
  }

  /**
   * Create/save a new paciente.
   * POST pacientes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.only(['cpfPaciente', 'namePaciente', 'email', 'password', 'telefonePaciente']);

    const paciente = await Paciente.create(data);

    return paciente;
  }
  /**
   * Update paciente details.
   * PUT or PATCH pacientes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {

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
  async perfil({ request }) {
    const user = await Paciente.findByOrFail("cpfPaciente", request.header("perfil"));
    await user.load('agendaPaciente');
    return user
  }
  async login({ request, auth }) {
    const { cpfPaciente, password } = request.all();
    const adminAuth = auth.authenticator("paciente");
    const token = await adminAuth.attempt(cpfPaciente, password);
    return token
  }
  async contadorTotal(){
    const contador = await Paciente.getCount();
    return contador;
  }
  async contadorAtivo(){
    const contador = await Paciente.query().where('ativo_paciente',true).getCount();
    return contador;
  }
}

module.exports = PacienteController
