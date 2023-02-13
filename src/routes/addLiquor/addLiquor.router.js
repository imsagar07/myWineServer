const express = require('express');
const auth = require('../../middlewares/auth');

const {
  addLiquorData,getLiquorByidData,saveLiquorBrands
} = require('./addLiquor.controller');

const addLiquorRoute = express.Router();

addLiquorRoute.post('/', auth,  addLiquorData);
addLiquorRoute.post('/getLiquorByBrands', auth,  getLiquorByidData);
addLiquorRoute.post('/saveLiquorBrandData',  saveLiquorBrands);
module.exports = addLiquorRoute;