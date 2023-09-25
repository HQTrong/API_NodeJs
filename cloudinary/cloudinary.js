const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require("multer");

//Config Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});
//Storage of Cloudinary
const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'ThumNail',
        allowedFormats: ['jpg', 'png', 'jpeg'],
        transformation: [{
            width: 500,
            height: 500,
            gravity: "faces",
            crop: "fill"

        }],
    }
});
const upload = multer({
    storage: storage
});

module.exports = upload;