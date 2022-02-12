const express = require('express');
const router = express.Router();
var productsController = require("../controllers/productsController");

// Metodo Get para traer el listado de los productos - Joaquin
router.get("/", productsController.listado)
// Metodo Post para crear - Joaquin
router.get("/crear", productsController.crear);
router.post("/crear", productsController.guardado);
// Metodo Put para editar el producto - Yonatan

// Metodo Delete para eliminar - Yonatan



module.exports = router;