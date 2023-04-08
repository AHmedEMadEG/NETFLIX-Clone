const  usersController  = require("../controllers/users.controller");

module.exports = (app) => {
    // GET USER
    app.get('/api/users/find/:id', usersController.getUser);
}
