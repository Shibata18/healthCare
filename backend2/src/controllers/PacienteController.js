const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { cpf, name, email, senha, telefone, imagem } = req.body;
        await connection('pacientes').insert({
            cpf, name, email, senha, telefone, imagem
        })

        return res.json({ cpf,name,telefone  });
    },
    async  index(req, res) {
        const doctors = await connection('doctors').select('*');

        return res.json(doctors);
    },
    async delete(req, res) {
        const { cpf } = req.body;

        await connection('doctors').where('cpf', cpf).delete();

        return res.status(204).send();
    }
}