const express = require('express');
const auth = require('../../middlewares/auth');

const {
  addLiquorData,
} = require('./addLiquor.controller');

const addLiquorRoute = express.Router();

addLiquorRoute.get('/', auth,  addLiquorData);

module.exports = addLiquorRoute;