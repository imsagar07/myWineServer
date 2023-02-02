const express = require('express');
const auth = require('../../middlewares/auth');
const addressRouter = express.Router();

const { savAddressData, getAddress } = require('../addAddress/addAddress.controller');

addressRouter.post('/', auth, savAddressData);
addressRouter.post('/getAddress', auth, getAddress);

module.exports = addressRouter;