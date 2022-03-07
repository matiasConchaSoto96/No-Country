const multer = require('multer'); 
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images')) //chequear ruta
    },
    filename: (req, file, cb) => {
        const newFilename = 'product-' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    }
});


const fileFilter = function(req, file,callback) {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
        req.fileValidationError = "Sólo imágenes (.jpg, .jpeg, .png, .gif)";
        return callback(null,false,req.fileValidationError);
    }
    callback(null,true);
}

const upload = multer({storage, fileFilter});

module.exports = upload;