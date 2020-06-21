const connection = require('../database/connection');
const bcrypt = require('bcryptjs');

module.exports = {
    async create(req, res) {
        const senha = bcrypt.hashSync(req.body.senha, 10);
        const { cpf_medico, name_medico, email,telefone_medico, conselho, registro, especialidade  } = req.body;
        await connection('doctors').insert({
            cpf_medico, name_medico, email, senha, telefone_medico, conselho, registro, especialidade
        })

        return res.json({ name_medico, especialidade });
    },
    async  index(req, res) {
	const doctors = await connection('doctors').select('*');

        return res.json(doctors);
    },
    async delete(req, res) {
        const { cpf_medico } = req.body;

        await connection('doctors').where('cpf_medico', cpf_medico).delete();

        return res.status(204).send('Deletado');
    },
    async update(req, res) {
        const { cpf_medico, email, senha, telefone_medico } = req.body;
        await connection('doctors')
            .where('cpf_medico', cpf_medico)
            .update({name_medico, email, senha, telefone_medico, conselho, registro, especialidade})

        return res.status(204).send("atualizado");
    }
}
