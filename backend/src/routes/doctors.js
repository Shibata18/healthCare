const express = require('express');
const router = express.Router();
const { Doctor } = require("../models/Doctor");

const { auth } = require("../middleware/auth");

//=================================
//             doctor
//=================================

router.get("/auth", auth, (req, res) => {
    res.status(200).json({
        _id: req.doctor._id,
        isAdmin: req.doctor.role === 0 ? false : true,
        isAuth: true,
        email: req.doctor.email,
        name: req.doctor.name,
        telefone: req.doctor.telefone,
        role: req.doctor.role,
        image: req.doctor.image,
    });
});

router.post("/register", (req, res) => {

    const doctor = new Doctor(req.body);

    doctor.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });
});

router.post("/login", (req, res) => {
    doctor.findOne({ email: req.body.email }, (err, doctor) => {
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

router.get("/logout", auth, (req, res) => {
    doctor.findOneAndUpdate({ _id: req.doctor._id }, { token: "", tokenExp: "" }, (err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        });
    });
});

module.exports = router;
