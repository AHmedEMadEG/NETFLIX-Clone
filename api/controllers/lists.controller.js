const List = require("../models/list.model");

// GET LIST
exports.getList = (req,res) => {
    List.findById(req.params.id, (err,list) => {
        if(err){
            res.status(500).send({msg:err});
            console.log(err);
            return;
        }
        const { password, ...others} = list._doc;
        res.status(200).send(others);
    });
}