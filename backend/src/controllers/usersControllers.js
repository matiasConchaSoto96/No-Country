const db = require("../database/models");
const { hash } = require("bcrypt"); // bcrypt (npm i bcrypt) para encriptar contraseñas
const { validationResult } = require("express-validator");

const getUrl = (req) => {
  return `${req.protocol}://${req.get("host")}${req.originalUrl}`;
};

module.exports = {

  store:(req,res)=>{
    const {
        name,
        email,
        pass,
        rol
    } = req.body
    db.User
    .create({
      name,
      email,
      pass,
      rol
    })
    .then(usuarios => {
        return res.status(200).json({
            data:usuarios,
            meta:{status:200, endpoint: getUrl(req)},
            created: "ok"
        })
        
    })
    .catch(error => console.log(error))
  },
	login: async (req, res) => {
    let errors = validationResult(req)
    
    // Si no hay errores que vengan del middleware
    if (errors.isEmpty()) {
      try {
        const { email } = req.body;
        const user = await db.User.findOne({ email });

        // Buscamos el usuario enviado en la bd y devolvemos ok: true para que frontend pueda tomar esto al hacer el login
        res.status(200).json({
          meta: {
            status: 200,
            ok: true,
          },
          data: user,
          errors: null
        });
      } catch (error) {
        // En caso de que el usuario no exista guardamos los mensajes de error del middleware en meta.msg para que los puedan mostrar en frontend
        res.status(404).json({
          meta: {
            status: 404,
            ok: false,
            msg: error.message,
          },
        });
      }
    } else {
      // Los errores que vengan del middleware lo guardamos en errors
      const errorsObj = errors.mapped();

      for (key in errorsObj) {
        delete errorsObj[key].param;
        delete errorsObj[key].location;
      }
      res.status(200).json({
        meta: {
          status: 200,
          ok: false,
        },
        data: null,
        errors:errorsObj
      });
    }
  }
};