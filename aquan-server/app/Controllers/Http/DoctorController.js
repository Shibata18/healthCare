'use strict'
const Doctor = use("App/Models/Doctor");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with doctors
 */
class DoctorController {
  /**
   * Show a list of all doctors.
   * GET doctors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const user = Doctor.query().with('agendaDoctor').fetch()

    return user
  }
  /**
   * Create/save a new doctor.
   * POST doctors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.only(['cpfDoctor', 'nameDoctor', 'email', 'password', 'telefoneDoctor', 'conselho', 'registro', 'especialidade']);

    const user = await Doctor.create(data);

    return user;
  }

  /**
   * Display a single doctor.
   * GET doctors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const user = await Doctor.findOrFail(params.id)

    await user.load('agendaDoctor')

    return user
  }

  /**
   * Update doctor details.
   * PUT or PATCH doctors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const doctor = await Doctor.findOrFail(params.id)
    const data = request.only([
      'nameDoctor',
      'email',
      'password',
      'telefoneDoctor',
      'conselho',
      'registro',
      'especialidade',
      'ativo_medico'
    ])

    doctor.merge(data)

    await doctor.save()

    return doctor
  }

  /**
   * Delete a doctor with id.
   * DELETE doctors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    /*
      const user = await Doctor.findOrFail(params.id)

      if (user.user_id !== auth.user.id) {
        return response.status(401).send({ error: 'Not authorized' })
      }

      await user.delete()*/
  }
  async perfil({ request }) {
    const user = await Doctor.findByOrFail("cpfDoctor", request.header("perfil"));
    await user.load('agendaDoctor');
    return user;
  }
  async login({ request, auth }) {
    const { cpfDoctor, password } = request.all();
    const adminAuth = auth.authenticator("doctor");
    const token = await adminAuth.attempt(cpfDoctor, password);
    return token
  }
}

module.exports = DoctorController
