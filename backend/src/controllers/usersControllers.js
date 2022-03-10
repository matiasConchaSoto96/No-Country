const db = require("../database/models");
const { hash } = require("bcrypt"); // bcrypt (npm i bcrypt) para encriptar contraseñas
const { validationResult } = require("express-validator");

const getUrl = (req) => {
  return `${req.protocol}://${req.get("host")}${req.originalUrl}`;
};

module.exports = {
  store:async (req,res)=>{
    const errors = validationResult(req);

      if (errors.isEmpty()) {
        const { email, name, lastname, password } = req.body;
        db.User.create({
          email,
          name,
          lastname,
          password: await hash(password, 10),
          rol: 1,
        })
        .then(user => {
          res.status(200).json({
             data: user,
             meta: {
               ok: true,
               status: 200,
               msg: "Usuario creado con exito",
             },
             errors:null
           });
        })

      } else {
        const errorsObj = errors.mapped();
        for (key in errorsObj) {
          delete errorsObj[key].param;
          delete errorsObj[key].location;
        }
  
        return res.status(200).json({
          meta: {
            ok: false,
            status: 200,
            msg: "El registro no se realizo",
          },
          data: null,
          errors:errorsObj
        });
      }

  },

  editUser:async (req,res)=>{
    const errors = validationResult(req);

      if (errors.isEmpty()) {
        const { email, name, lastname, password } = req.body;
        db.User.update({
          email,
          name,
          lastname,
          password: await hash(password, 10),
          rol: 1,
        }, {
          where: {
            id: req.params.id
          }
        })
        .then(user => {
          res.status(200).json({
             data: user,
             meta: {
               ok: true,
               status: 200,
               msg: "Usuario editado con exito",
             },
             errors:null
           });
        })

      } else {
        const errorsObj = errors.mapped();
        for (key in errorsObj) {
          delete errorsObj[key].param;
          delete errorsObj[key].location;
        }
  
        return res.status(200).json({
          meta: {
            ok: false,
            status: 200,
            msg: "la edicion no se realizo",
          },
          data: null,
          errors:errorsObj
        });
      }

  },

  list: function (req,res){
    db.User.findAll()
        .then(usuarios => {
           return res.status(200).json({
            meta:{
                status:200, 
                endpoint: getUrl(req),
                total: usuarios.length
            }, 
               data: usuarios
           })
        })
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