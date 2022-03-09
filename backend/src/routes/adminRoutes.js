const express = require('express');
const router = express.Router();
var productsController = require("../controllers/productsController");
const upload = require('../middlewares/multerProducts')

/* CRUD */
// Metodo Get para traer el listado de los productos - Joaquin
router.get("/", productsController.list)

router.get("/categorias", productsController.category)

// Metodo Post para crear - Joaquin
router.post("/", productsController.store); 
router.get("/images", productsController.imageGet);
router.post("/images", upload.single("image"), productsController.imageCreate);

// Metodo Put para editar el producto - Yonatan
router.put("/update/:id", productsController.update)

// Metodo Delete para eliminar - Yonatan
router.delete("/delete/:id", productsController.delete)

// Metodo Get para tomar un producto 
router.get("/:id", productsController.getOne)



// Metodo Post para crear - Joaquin

router.get("/categorias/:id", productsController.getCategory);
router.post("/categorias/", productsController.addCategory);

module.exports = router;