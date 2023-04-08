const  listsController  = require("../controllers/lists.controller");

module.exports = (app) => {
    // GET LIST
    app.get('/api/lists/find/:id', listsController.getList);
}
