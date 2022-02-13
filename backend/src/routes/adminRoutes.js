const express = require('express');
const router = express.Router();
var productsController = require("../controllers/productsController");

/* CRUD */
// Metodo Get para traer el listado de los productos - Joaquin
router.get("/", productsController.listado)

// Metodo Post para crear - Joaquin
router.get("/crear", productsController.crear);
router.post("/crear", productsController.guardado);

// Metodo Put para editar el producto - Yonatan
router.put("/update/:id", productsController.update)

// Metodo Delete para eliminar - Yonatan
router.get("/delete/:id", productsController.delete)

// Metodo Get para tomar un producto 
router.get("/:id", productsController.getOne)



module.exports = router;