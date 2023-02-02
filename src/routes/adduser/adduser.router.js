const express = require('express');

const {
  addUserData,
} = require('./adduser.controller');

const {
  signUpdata
} = require('./adduser.controller');

const {
  signInData
} = require('./adduser.controller');

const addUserRouter = express.Router();

addUserRouter.post('/', addUserData);

addUserRouter.post('/signUp', signUpdata);

addUserRouter.post('/signIn', signInData);

module.exports = addUserRouter;