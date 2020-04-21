const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const UserSchema = mongoose.Schema({
    namePaciente: {
        type:String,
        require:true,
    },
    cpfPaciente:{
        type:String,
        minglength:11,
        unique:1,
        require:true,
        minglength: 11,
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
    telefonePaciente:{
        type:String,
    },
    image: String,
    token : {
        type: String,
    },
    tokenExp :{
        type: Number
    },
    ativoPaciente:{
      type:Boolean,
      default:true
    }
},{timestamps:true})


UserSchema.pre('save', function( next ) {
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

UserSchema.methods.comparePassword = function(plainPassword,cb){
    bcrypt.compare(plainPassword, this.password, function(err, isMatch){
        if (err) return cb(err);
        cb(null, isMatch)
    })
}

UserSchema.methods.generateToken = function(cb) {
    var user = this;
    var token =  jwt.sign(user._id.toHexString(),'secret')

    user.token = token;
    user.save(function (err, user){
        if(err) return cb(err)
        cb(null, user);
    })
}

UserSchema.statics.findByToken = function (token, cb) {
    var user = this;

    jwt.verify(token,'secret',function(err, decode){
        user.findOne({"_id":decode, "token":token}, function(err, user){
            if(err) return cb(err);
            cb(null, user);
        })
    })
}
UserSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });


const User = mongoose.model('User', UserSchema);

module.exports = { User }
