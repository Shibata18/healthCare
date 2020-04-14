const connection = require('../database/connection');

module.exports = {
    async create(req,res){
        const {email,senha} = req.body;

        const loginDoctors = await connection('doctors')
            .where({
                'email':email,
                'senha':senha
            })
            .select('name_medico')
        if(!loginDoctors){
            return res.status(400).json({error:"Nenhum médico encontrado"});
        }
        /* else if(!loginPaciente){
            return res.status(400).json({error:"Nenhum paciente encontrado"});
        } */
        return res.json(loginDoctors);
    },
    async desativar(req,res){

    }
}
