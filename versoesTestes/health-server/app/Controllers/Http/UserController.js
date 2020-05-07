'use strict'
//Para criar um controller adonis make:controller User --type http
const User = use("App/Models/User")
class UserController {
  async store({ request }) {
    const data = request.only(['cpfDoctor', 'nameDoctor', 'email', 'password', 'telefoneDoctor', 'conselho', 'registro', 'especialidade']);

    const user = await User.create(data);

    return user;
  };
  async index() {
    const user = User.all()

    return user
  };
  async show({ params }) {
    const user = await User.findOrFail(params.id)

    await user.load('agendaUser')

    return user
  };
  async update({ params, request, response }) {
    const user = await User.findOrFail(params.id)

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

    user.merge(data)

    await user.save()

    return user
  }
  /* async destroy ({ params, auth, response }) {
    const user = await User.findOrFail(params.id)
  
    if (user.user_id !== auth.user.id) {
      return response.status(401).send({ error: 'Not authorized' })
    }
  
    await user.delete()
  } */
}

module.exports = UserController
