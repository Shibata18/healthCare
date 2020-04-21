const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { consulta, pergunta, resposta } = req.body;

        await connection('prontuario').insert({ consulta, pergunta, resposta })

        return res.status(204).send();
    },
    async  index(req, res) {

        const prontuario = await connection('prontuario').select('*');
        return res.json(prontuario);
    },
    async delete(req, res) {

    },
    async update(req, res) {

    }
}
