'use strict'

class SessionController {
  async create({request,auth}){
    const {cpfUser,password} = request.all();
    const token = await auth.attempt(cpfUser,password);
    return token
  }
}

module.exports = SessionController
