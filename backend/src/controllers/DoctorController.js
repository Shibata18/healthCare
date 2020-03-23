const User = require('../models/User');

module.exports = {

    async index(req, res) {
        const { name} = req.query
        const users = await User.findOne({name});

        return res.json(users)
    },

    async store(req, res) {
        //console.log(req.body);
        const { name,password,email } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            
             user = await User.create({
                email,
                password,
                name,
            })   
        }
        return res.json(user)
    },
    async update() { },
    async destroy() { }
};