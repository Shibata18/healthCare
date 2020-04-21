const connection = require('../database/connection');

module.exports = {
    async create(req,res){
        const {email,senha} = req.body;
        const loginDoctors = await connection('pacientes')
            .where('email',email)
            .where('senha',senha)
            .select('*')
        if(!loginDoctors){
            return res.status(400).json({error:"Nenhum médico encontrado"});
        }
        return res.json(loginDoctors);
    },
    async desativar(req,res){

    }
}
