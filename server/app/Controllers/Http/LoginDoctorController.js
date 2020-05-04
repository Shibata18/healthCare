'use strict'

class LoginDoctorController {
async login({ request, auth }) {
    const { cpfDoctor, password } = request.all();
    const adminAuth = auth.authenticator("doctor");
    const token = await adminAuth.attempt(cpfDoctor, password);
    return token
  }

}

module.exports = LoginDoctorController
