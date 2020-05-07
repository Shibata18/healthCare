const express = require('express');
const rotas = express.Router();
const { Agenda } = require("../models/Agenda");

//const { auth } = require("../middleware/auth");
rotas.post('/agenda',async (req,res)=>{
  const data = new Agenda(req.body);
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
rotas.get("/agenda", async (req, res) => {
    const find = await Agenda.find();
    try {
        res.json(find);
    } catch (error) {
        res.status(500).send(error);
    }
});
rotas.put("/agenda",async (req,res)=>{
   const id = req.params.id
   const {idDoctor} = req.headers.idDoctor
    const {hora,idPaciente, motivo,ativo} = req.body;
    await Agenda.findOneAndUpdate(id,{hora, idDoctor, idPaciente, motivo,ativo})
    try {
        res.json({success:"Alterado com sucesso"})
    } catch (error) {
        res.status(500).send(error);
    }
});
rotas.delete("/agenda/:id",async (req,res)=>{
    //const {cpf} = req.body;
    const id = req.params.id;
    const deletar =  await Agenda.findOneAndDelete(id);
        try {
            deletar.remove();
            res.json({success:"deletado com sucesso"})
        } catch (error) {
            res.status(500).send(error);
        }
});
module.exports = rotas;
