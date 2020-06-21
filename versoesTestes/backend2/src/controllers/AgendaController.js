const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { descricao, prontuario_fk, horario, cpf_medico_fk, cpf_paciente_fk } = req.body;
        await connection('agenda').insert({ descricao, prontuario_fk, horario, cpf_medico_fk, cpf_paciente_fk })

        return res.status(204).send();
    },
    async  index(req, res) {

        const agenda = await connection('agenda').select('*');
        return res.json(agenda);
    },
    async delete(req, res) {

    },
    async update(req, res) {

    }
}
