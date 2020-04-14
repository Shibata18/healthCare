const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { } = req.body;
        await connection('agenda').insert({   })

        return res.json({ name_medico, especialidade });
    },
    async  index(req, res) {

    },
    async delete(req, res) {

    },
    async update(req, res) {

    }
}
