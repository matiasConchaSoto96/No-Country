/*let db = require("../database/models");

let productsController = {
    crear: function(req, res){
        db.Product.findAll()
            .then(function(categorias){
                return res.render("creacionProductos", {categorias:categorias});
            })
    },
    guardado: function (req,res){
        db.Product.create({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            stock: req.body.stock,
            featured: req.body.featured,
            discount: req.body.discount,
            id_category: req.body,id_category
        }); 

        res.redirect("/")
    },
    listado: function (req,res){
        db.Product.findAll()
            .then(function(productos){
                res.render("listadoProductos", {productos:productos})
            })
    }
}

module.exports = productsController*/