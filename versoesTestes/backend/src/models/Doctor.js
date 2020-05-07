const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const DoctorSchema = mongoose.Schema({
    nameDoctor: {
        type:String,
        require:true,
    },
    cpfDoctor:{
        type:String,
        maxglength: 11,
        minglength: 11,
        require:true,
        unique:1
    },
    email: {
        type:String,
        trim:true,
        unique: 1,
        require:true,
    },
    password: {
        type: String,
        minglength: 5,
        require:true,
    },
    conselho:{
        type:String,
        require:true,
    },
    telefoneDoctor:{
        type:String,
    },
    registro:{
        type:String,
        require:true,
    },
    especialidade:{
        type:String,
        require:true,
    },
    image: String,
    token : {
        type: String,
    },
    tokenExp :{
        type: Number
    },
    ativo_medico:{
      type: Boolean,
      default:true
    }
},{ timestamps: true })


DoctorSchema.pre('save', function( next ) {
    var user = this;

    if(user.isModified('password')){

        bcrypt.genSalt(saltRounds, function(err, salt){
            if(err) return next(err);

            bcrypt.hash(user.password, salt, function(err, hash){
                if(err) return next(err);
                user.password = hash
                next()
            })
        })
    } else {
        next()
    }
});

DoctorSchema.methods.comparePassword = function(plainPassword,cb){
    bcrypt.compare(plainPassword, this.password, function(err, isMatch){
        if (err) return cb(err);
        cb(null, isMatch)
    })
}

DoctorSchema.methods.generateToken = function(cb) {
    let user = this;
    let token =  jwt.sign(user._id.toHexString(),'secret')

    user.token = token;
    user.save(function (err, user){
        if(err) return cb(err)
        cb(null, user);
    })
}

DoctorSchema.statics.findByToken = function (token, cb) {
    let user = this;

    jwt.verify(token,'secret',function(err, decode){
        user.findOne({"_id":decode, "token":token}, function(err, user){
            if(err) return cb(err);
            cb(null, user);
        })
    })
}
DoctorSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

const Doctor = mongoose.model('Doctor', DoctorSchema);

module.exports = { Doctor }
