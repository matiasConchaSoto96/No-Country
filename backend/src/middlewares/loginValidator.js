const { body } = require("express-validator");
const { compare } = require("bcrypt");
const db = require("../database/models");

module.exports = [
  body("email")
    .notEmpty()
    .withMessage("Email requerido") // Si notEmpty esta vacio guarda un mensaje
    .bail() // En caso de que la validación anterior haya fallado bail detiene la lectura

    .isEmail() // Pregunta si es un email
    .withMessage("Email invalido")
    .bail()
    .custom(async (value) => { 
      const email = await db.User.findOne({ email: value }); 
      // Buscamos el VALUE enviado del formulario de login en la BD y en caso de que sea falso retornamos un mensaje
      return !email && Promise.reject("Email no registrado");
    }),

  body("pass")
    .notEmpty()
    .withMessage("Contraseña requerida")
    .bail()
    .custom(async (value, {req}) => {
      const user = await db.User.findOne({email: req.body.email});
      if (user) {
        const passwordTrue = await compare(value, user.pass);
        return passwordTrue && Promise.reject("El email o la contraseña son incorrectas");
      }
    })
];