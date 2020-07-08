'use strict'

class LoginPacienteController {
    async login({ request, auth }) {
        const { cpfPaciente, password } = request.all();
        const adminAuth = auth.authenticator("paciente");
        const token = await adminAuth.attempt(cpfPaciente, password);
        return token
    }

}

module.exports = LoginPacienteController
