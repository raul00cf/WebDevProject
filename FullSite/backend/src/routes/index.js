'use strict'

import express from 'express';
import ip from 'ip';

const IP = ip.address();

const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    project: "Web Dev Final Project"
  });
});

router.get('/ip', (req, res, next) => {
  res.status(200).send({
    ip: IP
  });
});



export default router;
