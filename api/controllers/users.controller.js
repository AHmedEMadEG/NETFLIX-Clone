const User = require("../models/user.model");

// GET USER
exports.getUser = (req,res) => {
    User.findById(req.params.id, (err,user) => {
        if(err){
            res.status(500).send({msg:err});
            console.log(err);
            return;
        }
        const { password, ...others} = user._doc;
        res.status(200).send(others);
    });
}