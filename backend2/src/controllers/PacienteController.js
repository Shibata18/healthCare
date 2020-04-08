const connection = require('../database/connection');
const bcrypt = require('bcryptjs');
module.exports = {
    async create(req, res) {
        const { cpf_paciente, name_paciente, email,telefone_paciente } = req.body;
        const senha = bcrypt.hashSync(req.body.senha, 10);
          await connection('pacientes').insert({
              cpf_paciente, name_paciente, email, senha, telefone_paciente
          });
        return res.json({ cpf_paciente,name_paciente,telefone_paciente });
    },
    async  index(req, res) {
        const doctors = await connection('doctors').select('*');

        return res.json(doctors);
    },
    async delete(req, res) {
        const { cpf_paciente } = req.body;

        await connection('doctors').where('cpf_paciente', cpf_paciente).delete();

        return res.status(204).send();
    },

    async update(req, res) {
        const { cpf_paciente } = req.body;

        await connection('doctors').where('cpf_paciente', cpf_paciente).update('ativo_paciente',true);

        return res.status(204).send();
    }
}
