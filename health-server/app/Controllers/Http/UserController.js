'use strict'
//Para criar um controller adonis make:controller User --type http
const User = use("App/Models/User")
class UserController {
  async create({request}){
    const data = request.only(['cpfDoctor','nameDoctor','email','password','telefoneDoctor','conselho','registro','especialidade']);

    const user = await User.create(data);

    return user;
  }
}

module.exports = UserController
