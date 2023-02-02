const express = require('express');
const auth = require('../../middlewares/auth');

const {
    getLiquorsData,saveLiquorBrands,getLiquorsTypes
} = require('./getliquor.controller');

const getLiquorData = express.Router();

getLiquorData.get('/', auth, getLiquorsData);
getLiquorData.get('/getLiqourTypes', auth, getLiquorsTypes);
getLiquorData.post('/saveBrands', auth, saveLiquorBrands);

module.exports = getLiquorData;