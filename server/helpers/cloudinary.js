const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({ 
  cloud_name: 'de9enzvyy', 
  api_key: '748858583632311', 
  api_secret: 'ElhwjBaaACteNqLirV-OIilwa3Q' // Click 'View API Keys' above to copy your API secret
});
const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
