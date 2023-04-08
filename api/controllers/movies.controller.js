const Movie = require("../models/movie.model");

// GET MOVIE
exports.getMovie = (req,res) => {
    Movie.findById(req.params.id, (err,movie) => {
        if(err){
            res.status(500).send({msg:err});
            console.log(err);
            return;
        }
        const { password, ...others} = movie._doc;
        res.status(200).send(others);
    });
}