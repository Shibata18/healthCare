const express = require('express');
const router = express.Router();
const { Doctor } = require("../models/Doctor");

const { auth } = require("../middleware/auth");

router.get("/auth", auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.id === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        cpf: req.user.cpf,
        especialidade: req.user.especialidade,
        conselho: req.user.conselho,
        telefone: req.user.telefone,
        id: req.user.id,
        image: req.user.image,
    });
});

router.post("/register", async (req, res) => {

    const user = new Doctor(req.body);
    try {
        await user.save((err, doc) => {
            if (err) return res.json({ success: false, err });
            return res.status(200).json({
                success: true
            });
        });
    } catch (error) {
        res.status(500).send(err);

    }

});
router.get("/register", async (req, res) => {
    const find = await Doctor.find({});
    try {
        res.json(find);
    } catch (error) {
        res.status(500).send(error);
    }
});
router.get('/findbycpf',async (req,res)=>{
    const {cpf } = req.body;
    const findByCPF = await Doctor.findOne({cpf});
        try {
            res.json(findByCPF);
        } catch (error) {
            res.status(500).send(error);
        }
});
router.put("/register",async (req,res)=>{
    const {cpf,email, name, password, especialidade, conselho, registro, telefone} = req.body;
    await Doctor.findOneAndUpdate({cpf},{email, name, password, especialidade, conselho, registro, telefone})
    try {
        res.json({success:"Alterado com sucesso"})
    } catch (error) {
        res.status(500).send(error);
    }
});
router.delete("/register",async (req,res)=>{
    const {cpf} = req.body;
    const deletar =  await Doctor.findOneAndDelete({cpf});
        try {
            deletar.remove();
            res.json({success:"deletado com sucesso"})
        } catch (error) {
            res.status(500).send(error);
        }
});
router.post("/login", (req, res) => {
    Doctor.findOne({ email: req.body.email }, (err, user) => {
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

module.exports = router;
