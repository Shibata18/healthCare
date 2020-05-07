const express = require('express');
const router = express.Router();
const { Doctor } = require("../models/Doctor");

const {authDoc } = require("../middleware/auth");

router.get("/authDoc", authDoc, (req, res) => {
    res.status(200).json({
        _id: req.doctor._id,
        isAdmin: req.doctor.id === 0 ? false : true,
        isAuth: true,
        email: req.doctor.email,
        nameDoctor: req.doctor.nameDoctor,
        cpfDoctor: req.doctor.cpfDoctor,
        especialidade: req.doctor.especialidade,
        conselho: req.doctor.conselho,
        telefoneDoctor: req.doctor.telefoneDoctor,
        image: req.doctor.image,
    });
});

router.post("/doctor", async (req, res) => {

    const doctor = new Doctor(req.body);
    try {
        await doctor.save((err, doc) => {
            if (err) return res.json({ success: false, err });
            return res.status(200).json({
                success: true,
                doctor
            });
        });
    } catch (error) {
        res.status(500).send(err);

    }

});
router.get("/doctor", async (req, res) => {
    const find = await Doctor.find();
    try {
        res.json(find);
    } catch (error) {
        res.status(500).send(error);
    }
});
router.put("/doctor/:id", async (req, res) => {
    const id = req.params.id
    const { email, nameDoctor, password, especialidade, conselho, registro, telefoneDoctor, ativo_medico } = req.body;
    await Doctor.findOneAndUpdate(id, { email, nameDoctor, password, especialidade, conselho, registro, telefoneDoctor, ativo_medico })
    try {
        res.json({ success: "Alterado com sucesso" })
    } catch (error) {
        res.status(500).send(error);
    }
});
router.delete("/doctor/:id", async (req, res) => {
    //const {cpf} = req.body;
    const id = req.params.id;
    const deletar = await Doctor.findOneAndDelete(id);
    if (!deletar) {
        return res.status(500).send('ID não existe');
    } else {
        try {
            deletar.remove();
            res.json({ success: "deletado com sucesso" })
        } catch (error) {
            res.status(500).send(error);
        }
    }
});
router.post("/login", (req, res) => {
    Doctor.findOne({ email: req.body.email }, (err, doctor) => {
        if (!doctor)
            return res.json({
                loginSuccess: false,
                message: "Auth failed, email not found"
            });

        doctor.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
                return res.json({ loginSuccess: false, message: "Wrong password" });

            doctor.generateToken((err, doctor) => {
                if (err) return res.status(400).send(err);
                res.cookie("w_authExp", doctor.tokenExp);
                res
                    .cookie("w_auth", doctor.token)
                    .status(200)
                    .json({
                        loginSuccess: true
                    });
            });
        });
    });
});
router.get("/logout", authDoc, (req, res) => {
    Doctor.findOneAndUpdate({ _id: req.doctor._id }, { token: "", tokenExp: "" }, (err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        });
    });
});

module.exports = router;
