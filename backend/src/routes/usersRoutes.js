const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');
// Validations Middleware
const registerValidator = require('../middlewares/registerValidator');


// Metodo Post para crear - Joaquin
router.post("/", usersControllers.store);


module.exports = router;