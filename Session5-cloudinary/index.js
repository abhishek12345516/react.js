require('dotenv').config();
const express = require('express');
const cloudinary = require('cloudinary').v2;
const upload = require('./middlewere/fileupload'); // assumes multer is used

const app = express();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    res.status(200).send({
      message: 'Image uploaded successfully',
      image_url: result.secure_url
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Could not upload image' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
