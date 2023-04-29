const User = require("../models/user.model");
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');


// REGISTER
exports.register = (req,res) => {
    var newUser = new User(req.body);
    newUser.password = CryptoJS.AES.encrypt(
        newUser.password,
        process.env.SECRET_KEY
      ).toString();
    newUser.save()
            .then( (user) => {
                const { password, ...others} = user._doc;
                res.status(201).send(others);
            })
            .catch((err) =>{
                res.status(500).json(err);
            });
}

// LOG IN
exports.logIn = (req,res) => {
    User.findOne({username: req.body.username})
        .then((user) => {

        })
        .catch((err) => {
            res.status(500).json(err);
        });
}