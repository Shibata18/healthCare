'use strict'
const Agenda = use('App/Models/Agenda');
const OpenTok = require('opentok');
import config from '../../../conifg.json';
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with agenda
 */
class AgendaController {
  /**
   * Show a list of all agenda.
   * GET agenda
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const agenda = Agenda.query().with('file').fetch()
    return agenda;
  }

  /**
   * Render a form to be used for creating a new agenda.
   * GET agenda/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   *
  async create ({ request, response, view }) {
  }*/

  /**
   * Create/save a new agenda.
   * POST agenda
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(['doctor_cpf', 'paciente_cpf', 'horario']);
    const paciente = await Agenda.create(data);

    return paciente;
  }

  /**
   * Display a single agenda.
   * GET agenda/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const agenda = await Agenda.findOrFail(params.id);
    //await agenda.load('chat')
    return agenda
  }

  /**
   * Render a form to update an existing agenda.
   * GET agenda/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update agenda details.
   * PUT or PATCH agenda/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
    async update ({ params, request, response }) {
      const property = await Agenda.findOrFail(params.id)

      const data = request.only([
        'doctor_cpf', 'paciente_cpf', 'horario'
      ])

      property.merge(data)

      await property.save()

      return property
    }

  /**
   * Delete a agenda with id.
   * DELETE agenda/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
  async agendaDoctor({ request }) {
    //const user = await Doctor.findByOrFail("cpfDoctor",request.body.cpfDoctor)
    const user = await Agenda.query().where('doctor_cpf', request.header('cpfDoctor')).with('file').fetch()
    //await user.load('agendaDoctor');
    return user
  }
   async agendaPaciente({ request }) {
    const user = await Agenda.query().where('paciente_cpf', request.header('cpfPaciente')).with('file').fetch()
    return user
  }
}

module.exports = AgendaController
