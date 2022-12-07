'use strict'

import express from 'express';
import { decode } from 'js-base64';

import User from '../../models/user-model.js';

const router = express.Router();

router.get('/', (req, res, next) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/check/', (req, res, next) => {
  User.find({ 
    email: req.body.email
  })
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/login', (req, res, next) => {
  let authentification = decode(req.headers.authorization.split('Basic ')[1]).split(':');

  const email = authentification[0];
  const password = authentification[1];

  //console.log(email, password);

  User.find({ 
    email: email,
    password: password
  })
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/', (req, res, next) => {
  const newUser = new User(req.body);

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.put('/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => {
      if (!user) {
        res.json('User not Found!');
        return;
      }

      user.email = req.body.email;
      user.password = req.body.password;
      user.name = req.body.name;
      user.address = req.body.address;
      user.phone = req.body.phone;
      user.gender = req.body.gender;
      user.birthday = req.body.birthday;
      user.history = req.body.history;

      user.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/:id', (req, res, next) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

export default router;
