'use strict'
//Para criar um controller adonis make:controller User --type http
const User = use("App/Models/User")
class UserController {
  async store({ request }) {
    const data = request.only(['cpfUser',  'email', 'password']);

    const user = await User.create(data);

    return user;
  };
  async index() {
    const user = User.all()

    return user
  };
  async show({ params }) {
    const user = await User.findOrFail(params.id)
    return user
  };
  async update({ request, response ,params}) {
    const user = await User.findOrFail(params.id)

    const data = request.only([
      'email',
      'password',
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
  async login({request,auth}){
      const {cpfUser,password} = request.all();
      const token = await auth.attempt(cpfUser,password);
      return token;
  }
}

module.exports = UserController
