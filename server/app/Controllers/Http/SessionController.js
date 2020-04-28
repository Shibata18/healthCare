'use strict'
const Doctor = use("App/Models/Doctor")

class SessionController {
  async create({request,auth}){
    const {email,password} = request.all();
    const token = await auth.attempt(email,password);
    return token
  }
  async login({params,auth}){
    const user = await Doctor.findOrFail(params.id)
    const token = await auth.generate(user);
    return token
  }
}

module.exports = SessionController
