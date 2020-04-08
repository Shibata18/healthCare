const connection = require('../database/connection');

module.exports = {
    async create(req,res){
        const {email,senha} = req.body;

        const loginPaciente = await connection('pacientes')
            .where({
                'email':email,
                'senha':senha
            })
            .select('name')
        if(!loginPaciente){
          return res.status(400).json({error:"Nenhum paciente encontrado"});
        }
        return res.json(loginPaciente);
    }
}
