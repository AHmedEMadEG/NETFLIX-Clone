const User = require('../models/user.model');

verifyUsernameAndEmail = (req, res, next) => {
    var query = {$or: [{email: req.body.email},{username: req.body.username}]}
        User.findOne(query)
            .then( (user) => {
                (user && user.email === req.body.email && res.status(400).json("this email is already in use!")) 
                ||
                (user && user.username === req.body.username && res.status(400).json("this username is already in use!"))
                ||
                next();
            }) 
            .catch((err) => res.status(500).json(err));
}

module.exports = verifyUsernameAndEmail;