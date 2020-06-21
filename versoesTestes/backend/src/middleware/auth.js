const { User } = require('../models/User');
const { Doctor } = require("../models/Doctor");

let auth = (req, res, next) => {
  let token = req.cookies.w_auth;

  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user)
      return res.json({
        isAuth: false,
        error: true
      });

    req.token = token;
    req.user = user;
    next();
  });
};

let authDoc = (req, res, next) => {
  let token = req.cookies.w_auth;

  Doctor.findByToken(token, (err, doctor) => {
    if (err) throw err;
    if (!doctor)
      return res.json({
        isAuth: false,
        error: true
      });

    req.token = token;
    req.doctor = doctor;
    next();
  });
};
module.exports = { auth, authDoc };
