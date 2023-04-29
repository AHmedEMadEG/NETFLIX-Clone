const  authController  = require("../controllers/auth.controller");
const { verifySignUp } = require('../middlewares');

module.exports = (app) => {
    // REGISTER
    app.post('/api/auth/register', verifySignUp, authController.register);

     // LOG IN
     app.post('/api/auth/login', authController.logIn);
}
