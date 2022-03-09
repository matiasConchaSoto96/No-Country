const { validationResult } = require('express-validator')
const db = require('../database/models')
const Op = db.Sequelize.Op;

const getUrl = (req) => {
    return `${req.protocol}://${req.get("host")}${req.originalUrl}`
}

module.exports = {
    store:(req, res, next)=>{
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            
            const {
                name,
                price,
                description,
                stock,
                featured,
                discount,
                id_category,
                id_image,
            } = req.body

            db.Product
            .create({
                name,
                price,
                description,
                stock,
                featured,
                discount,
                id_category,
                id_image,
            })
            
            .then(productos => {
                return res.status(200).json({
                    meta:{
                        status:200, 
                        endpoint: getUrl(req),
                        msg: "Producto creado con éxito"
                    },
                    data:productos,
                })
            })
        
        
        }
    },
    imageCreate: function (req, res) {
        let errors = validationResult(req);
        if (req.fileValidatorError) {
            let image = {
                param: "image",
                msg: req.fileValidatorError,
            };
            errors.push(image);
        }

        if (errors.isEmpty()) {
            let { 
                image
            } = req.body;

            db.Image.create({
                image: req.file.filename,  
            })
            .then(productos => {
                return res.status(200).json({
                    meta:{
                        status:200, 
                        endpoint: getUrl(req),
                        msg: "Producto creado con éxito"
                    },
                    data:productos,
                })
                .then((response) => response.json())
            })
            .catch(err => console.log)
        } 
    },
    imageGet: function (req, res){
        db.Image.findAll()
            .then(images => {
               return res.status(200).json({
                meta:{
                    status:200, 
                    endpoint: getUrl(req),
                    total: images.length
                }, 
                   data: images
               })
            })
    },
    list: function (req,res){
        db.Product.findAll({
            include: [
                {association: "categories"},
             ]
        })
            .then(productos => {
               return res.status(200).json({
                meta:{
                    status:200, 
                    endpoint: getUrl(req),
                    total: productos.length
                }, 
                   data: productos
               })
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
                    msg: "Producto eliminado exitosamente"
                })
            } else {
                return res.status(200).json({
                    msg: "Sin cambios"
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
                    msg: "Id equivocado"
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
                            msg: "Id no encontrado"
                        }
                    })
                }
            })
            .catch(error => console.log(error))
        }
    },

    category: function (req, res){
        db.Category.findAll()
            .then(categorias =>{
                return res.status(200).json({
                    meta:{
                        status:200,
                        endpoint:getUrl(req),
                        total:categorias.length
                    },
                    data:categorias
                })
            })
    },

    getCategory: (req, res) => {
        if(req.params.id % 1 !== 0 || req.params.id < 0){
            return res.status(404).json({
                meta: {
                    status: 404,
                    msg: "Id equivocado"
                }
            })
        } else {
            db.Category.findOne({
                where: {
                    id: req.params.id,
                }
            })
            .then(cat => {
                if(cat){
                    return res.status(200).json({
                        meta: {
                            endpoint: getUrl(req),
                            status: 200
                        },
                        data: cat
                    })
                } else {
                    return res.status(404).json({
                        meta: {
                            status: 404,
                            msg: "Id no encontrado"
                        }
                    })
                }
            })
            .catch(error => console.log(error))
        }
    },
    addCategory: (req, res) => {
        const {
            name,
        } = req.body

        db.Category
        .create({
            name,
        })
        
        .then(category => {
            return res.status(200).json({
                meta:{
                    status:200, 
                    endpoint: getUrl(req),
                    msg: "categoria creada con éxito"
                },
                data:category,
            })
        })
    }
}