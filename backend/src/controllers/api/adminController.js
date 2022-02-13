const db = require('../../database/models')
const Op = db.Sequelize.Op;

const getUrl = (req) => {
    return `${req.protocol}://${req.get("host")}${req.originalUrl}`
}

module.exports = {
    
}