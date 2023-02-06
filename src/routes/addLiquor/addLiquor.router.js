const express = require('express');
const auth = require('../../middlewares/auth');

const {
  addLiquorData,
} = require('./addLiquor.controller');

const addLiquorRoute = express.Router();

addLiquorRoute.post('/', auth,  addLiquorData);

module.exports = addLiquorRoute;