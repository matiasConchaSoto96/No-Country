module.exports = (sequelize, dataTypes) => {
    let alias = "Image";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        image: {
            type: dataTypes.STRING(100)
        }
    }
    
    let config = {
        tableName: "images",
        timestamps: false
    }

    const Image = sequelize.define(alias, cols, config)

    Image.associate = models => {
        Image.hasMany(models.Product, {
            as: "products",
            foreignKey:"id_image" 
        })
    }

    return Image;
}