module.exports = function(sequelize, dataTypes){
    let alias = "Product";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING
        },
        price:{
            type: dataTypes.INTEGER
        },
        description:{
            type: dataTypes.STRING
        },
        stock:{
            type: dataTypes.INTEGER
        },
        featured:{
            type: dataTypes.INTEGER
        },
        image:{
            type: dataTypes.STRING
        },
        discount: {
            type:dataTypes.INTEGER
        },
        id_category:{
            type:dataTypes.INTEGER
        }
    }
    let config = {
        tableName: "products",
        timestamps: false
    }
    let Product = sequelize.define(alias, cols, config);

    Product.associate = models => {
        Product.belongsTo(models.Category,{
            as: "categories",
            foreignKey: "id_category"
        });
    }

    return Product
}