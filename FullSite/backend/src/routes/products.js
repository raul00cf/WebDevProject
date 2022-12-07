'use strict'

import express from 'express';
import multer from 'multer';

import Product from '../../models/product-model.js';

const router = express.Router();

const uploadImage = multer({ 
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './data/image');
    },
    filename: (req, file, cb) => {
      cb(null, new Date().toDateString() + '-' + file.originalname);
    }
  }), 
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.match(/^image/)) {
      cb(null, true);
    }
    else {
      cb(null, false);
    }
  }
});

const uploadAudio = multer({ 
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './data/audio');
    },
    filename: (req, file, cb) => {
      cb(null, new Date().toDateString() + '-' + file.originalname);
    }
  }), 
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.match(/^audio/)) {
      cb(null, true);
    }
    else {
      cb(null, false);
    }
  }
});

router.get('/', (req, res, next) => {
  Product.find()
    .then(product => res.json(product))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/', (req, res, next) => {
  const newProduct = new Product(req.body);

  newProduct.save({ timestamps: false })
    .then((newProduct) => res.json({
      _id: newProduct._id
    }))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/image', uploadImage.single('productImage'), (req, res, next) => {
  //console.log(req.file);
  const saved = req.file !== undefined;

  res.json({
    saved: saved,
    filePath: saved ? 
      "image/" + req.file.filename : 
      ""
  })
});

router.post('/audio', uploadAudio.single('productAudio'), (req, res, next) => {
  //console.log(req.file);
  const saved = req.file !== undefined;

  res.json({
    saved: saved,
    filePath: saved ? 
      "audio/" + req.file.filename : 
      ""
  })
});

router.put('/:id', (req, res, next) => {
  Product.findById(req.params.id)
    .then(product => {
      if (!product) {
        res.json('Product not Found!');
        return;
      }

      product.name = req.body.name;
      product.type = req.body.type;
      product.image = req.body.image;
      product.price = req.body.price;
      product.rating = req.body.rating;
      product.stock = req.body.stock;
      product.audio = req.body.audio;
      product.colors = req.body.colors;

      product.save({ timestamps: false })
        .then(() => res.json('Product updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/:id', (req, res, next) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json('Product deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

export default router;
