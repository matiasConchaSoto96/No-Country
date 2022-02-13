const db = require('../database/models')
const Op = db.Sequelize.Op;

const getUrl = (req) => {
    return `${req.protocol}://${req.get("host")}${req.originalUrl}`
}

module.exports = {
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
    }, 
    update: (req, res) => {
        const {
            name,
            price,
            description,
            stock,
            featured,
            discount,
            id_category 
        } = req.body

        db.Product.update({
            name,
            price,
            description,
            stock,
            featured,
            discount,
            id_category 
        }, {
            where: {
                id: req.params.id,
            }
        })
        .then(result => {
            if(result){
                return res.status(201).json({
                    msg: "editado con exito",

                })
            } else {
                return res.status(201).json({
                    msg: "no changes",
                    
                })
            }
        })
        .catch(error => console.log(error))
    },
    delete: (req, res) => {
        db.Product.destroy({
            where: {
                id: req.params.id,
            }
        })
        .then(result => {
            if(result){
                return res.status(200).json({
                    msg: "movie deleted successfully"
                })
            } else {
                return res.status(200).json({
                    msg: "no changes"
                })
            }
        })
    },
    getOne: (req, res) => {
        // Chequeamos que el existe un id en el parametro
        if(req.params.id % 1 !== 0 || req.params.id < 0){
            return res.status(404).json({
                meta: {
                    status: 404,
                    msg: "wrong ID"
                }
            })
        } else {
            db.Product.findOne({
                where: {
                    id: req.params.id,
                }
            })
            //Buscamos el id por parametro y lo guardamos en un json 
            .then(pro => {
                if(pro){
                    // Retornamos la informacion y lo ponemos en un json
                    return res.status(200).json({
                        meta: {
                            endpoint: getUrl(req),
                            status: 200
                        },
                        // en data se guarda la informacion del producto
                        data: pro
                    })
                } else {
                    return res.status(404).json({
                        meta: {
                            status: 404,
                            msg: "ID not found"
                        }
                    })
                }
            })
            .catch(error => console.log(error))
        }
    }
}