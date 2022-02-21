const { body } = require("express-validator");
const { compare } = require("bcrypt");
const db = require("../database/models");


module.exports = [
    body('name').notEmpty().withMessage('Nombre requerido').bail(),
    body('email').notEmpty().withMessage('email requerido').isEmail().withMessage('email invalido').bail().custom(async (value) => { 
        const email = await db.User.findOne({ email: value }); 
        // Buscamos el VALUE enviado del formulario de register en la BD y en caso de que sea falso retornamos un mensaje
        return !email && Promise.reject("Email existente");
      }),
    body('pass').notEmpty()
    .withMessage("Contraseña requerida")
    .bail().isLength({min:6}).withMessage('La contraseña debe tener un mínimo de 6 caracteres')
]