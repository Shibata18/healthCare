'use strict'

const Agenda = use('App/Models/Agenda');
const Database = use("Database");
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
    const agenda = await Database.select('agenda.horario','agenda.id','agenda.paciente_cpf','agenda.doctor_cpf','pacientes.namePaciente','doctors.nameDoctor')
      .from('agenda')
      .innerJoin('pacientes','agenda.paciente_cpf','pacientes.cpfPaciente')
      .innerJoin('doctors','agenda.doctor_cpf','doctors.cpfDoctor')
    return agenda;
  }

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
    await agenda.load('prontuario')
    return agenda
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
      const atualizarAgenda = await Agenda.findOrFail(params.id)

      const data = request.only([
        'doctor_cpf', 'paciente_cpf', 'horario'
      ])

      atualizarAgenda.merge(data)

      await atualizarAgenda.save()

      return atualizarAgenda
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
   // const user = await Agenda.query().where('doctor_cpf', request.header('cpfDoctor')).with('prontuario').fetch()
   const user = await  Database.select('agenda.horario','agenda.id','pacientes.namePaciente','agenda.paciente_cpf','agenda.doctor_cpf','doctors.nameDoctor','pacientes.cpfPaciente')//,'prontuarios.prontuario')
   .from('agenda')
   .where('doctor_cpf',request.header('cpfDoctor'))
   .innerJoin('pacientes','agenda.paciente_cpf','pacientes.cpfPaciente')
   .innerJoin('doctors','agenda.doctor_cpf','doctors.cpfDoctor')
//   .innerJoin('prontuarios','agenda.id','prontuarios.agenda_id')
    return user
  }
   async agendaPaciente({ request }) {
    //const user = await Agenda.query().where('paciente_cpf', request.header('cpfPaciente')).with('prontuario').fetch()
    const user = await  Database.select('agenda.horario','agenda.id','pacientes.namePaciente','doctors.nameDoctor')//,'prontuarios.prontuario')
    .from('agenda')
    .where('paciente_cpf',request.header('cpfPaciente'))
    .innerJoin('pacientes','agenda.paciente_cpf','pacientes.cpfPaciente')
    .innerJoin('doctors','agenda.doctor_cpf','doctors.cpfDoctor')
   // .innerJoin('prontuarios','agenda.id','prontuarios.agenda_id')
     return user
  }
}

module.exports = AgendaController
