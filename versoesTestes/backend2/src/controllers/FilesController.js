const connection = require('../database/connection');
module.exports = {
    async  index(req, res) {
        const files = await connection('files').select('*');
        return res.json(files);
    },
    async delete(req, res) {

    },
    async update(req, res) {

    }
}
