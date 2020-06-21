const express = require('express');
const rotas = express.Router();
const { User } = require("../models/User");

const { auth } = require("../middleware/auth");

//=================================
//             User
//=================================

rotas.post('/paciente',async (req,res)=>{
  const data = new User(req.body);
  try {
      await data.save((err, doc) => {
          if (err) return res.json({ success: false, err });
          return res.status(200).json({
              success: true,
              data
          });
      });
  } catch (error) {
      res.status(500).send(err);

  }

});
rotas.get("/paciente", async (req, res) => {
    const find = await User.find();
    try {
        res.json(find);
    } catch (error) {
        res.status(500).send(error);
    }
});
rotas.put("/paciente/:id",async (req,res)=>{
   const id = req.params.id
    const {email, namePaciente, password, telefonePaciente,ativoPaciente} = req.body;
    await User.findOneAndUpdate(id,{email, namePaciente, password, telefonePaciente,ativoPaciente})
    try {
        res.json({success:"Alterado com sucesso"})
    } catch (error) {
        res.status(500).send(error);
    }
});
rotas.delete("/paciente/:id",async (req,res)=>{
    //const {cpf} = req.body;
    const id = req.params.id;
    const deletar =  await User.findOneAndDelete(id);
        try {
            deletar.remove();
            res.json({success:"deletado com sucesso"})
        } catch (error) {
            res.status(500).send(error);
        }
});
rotas.get("/auth", auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.id === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        namePaciente: req.user.namePaciente,
        cpfPaciente: req.user.cpfPaciente,
        telefonePaciente: req.user.telefonePaciente,
        image: req.user.image,
    });
});
rotas.post("/loginUser", (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user)
            return res.json({
                loginSuccess: false,
                message: "Auth failed, email not found"
            });

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
                return res.json({ loginSuccess: false, message: "Wrong password" });

            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie("w_authExp", user.tokenExp);
                res
                    .cookie("w_auth", user.token)
                    .status(200)
                    .json({
                        loginSuccess: true
                    });
            });
        });
    });
});

rotas.get("/logout", auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, { token: "", tokenExp: "" }, (err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        });
    });
});

module.exports = rotas;
