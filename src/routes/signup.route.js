'use strict';
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const {usersModel} = require('../models/index.js');

router.post('/signup', async (req, res,next) => {

    try {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      console.log(req.body);
      const record = await usersModel.create(req.body);
      res.status(200).json(record);
    } catch (e) { res.status(403).send('Error Creating User'); }

    next();

  });

  module.exports = router;