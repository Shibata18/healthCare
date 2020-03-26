const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { cpf, name, email, senha, telefone, conselho, registro, especialidade, imagem } = req.body;
        await connection('doctors').insert({
            cpf, name, email, senha, telefone, conselho, registro, especialidade, imagem
        })

        return res.json({ name, especialidade });
    },
    async  index(req, res) {
        const doctors = await connection('doctors').select('*');

        return res.json(doctors);
    },
    async delete(req, res) {
        const { cpf } = req.body;

        await connection('doctors').where('cpf', cpf).delete();

        return res.status(204).send();
    },
    async update(req, res) {
        const { cpf, email, senha, telefone } = req.body;
        await connection('doctors')
            .where('cpf', cpf)
            .update('email', email)
            .update('senha', senha)
            .update('telefone',telefone)

        return res.status(204).send();
    }
}