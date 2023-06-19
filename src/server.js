'use strict';

require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const {usersModel} = require('./models/index.js');
const signUp=require('./routes/signup.route.js');
const signIn=require('./routes/signin.route.js');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(signUp);
app.use(signIn);

app.get('/', (req, res) => {
    res.status(200).send('Hello World baby');
});

function start(port) {
  app.listen(port, () => console.log('server up'));
}

module.exports = {
    app: app,
    start: start,
};