const  moviesController  = require("../controllers/movies.controller");

module.exports = (app) => {
    // GET MOVIE
    app.get('/api/movies/find/:id', moviesController.getMovie);
}
