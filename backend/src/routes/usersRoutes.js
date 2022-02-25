const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');
// Validations Middleware
const registerValidator = require('../middlewares/registerValidator');
const loginValidator = require('../middlewares/loginValidator');


// Metodo Post para crear - Joaquin
router.get("/", usersControllers.list);/*haciendo prueba de lista de usuarios*/

router.post("/register", registerValidator, usersControllers.store);

router.post("/login", loginValidator, usersControllers.login);


module.exports = router;