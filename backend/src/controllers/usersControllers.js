const User = require("../database/models");
const { hash } = require("bcrypt"); // bcrypt (npm i bcrypt) para encriptar contraseñas
const { validationResult } = require("express-validator");

const getUrl = (req) => {
  return `${req.protocol}://${req.get("host")}${req.originalUrl}`;
};

module.exports = {
};