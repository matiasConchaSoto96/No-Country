const db = require("../database/models");
const { hash } = require("bcrypt"); // bcrypt (npm i bcrypt) para encriptar contraseñas
//const { validationResult } = require("express-validator");

const getUrl = (req) => {
  return `${req.protocol}://${req.get("host")}${req.originalUrl}`;
};

module.exports = {

  store:(req,res)=>{
    const {
        name,
        email,
        pass,
        rol,
       // bannerOk,
        //social_id,
        //social_provider
    } = req.body
    db.User
    .create({
      name,
      email,
      pass,
      rol,
      //bannerOk,
      //social_id,
      //social_provider//
    })
    
    
    .then(usuarios => {
        return res.status(200).json({
            data:usuarios,
            meta:{status:200, endpoint: getUrl(req)},
            created: "ok"
        })
        
})
.catch(error => console.log(error))

  }
};