const express = require('express');

// const planetsRouter = require('./planets/planets.router');
const addUserRouter = require('./adduser/adduser.router');
const signUpdata = require('./adduser/adduser.router');
const signInData = require('./adduser/adduser.router');


const getLiquor = require('./getLiquor/getliquor.router');


const savAddressData = require('./addAddress/addAddress.router');
const getAddress = require('./addAddress/addAddress.router');

const saveLiquorData = require('./addLiquor/addLiquor.router');
const api = express.Router();

//user signin and signup
api.use('/addUser', addUserRouter);
api.use('/addUser/signUp', signUpdata);
api.use('/addUser/signIn', signInData);



//liquor details api
api.use('/getliquor', getLiquor);
api.use('/getLiqourTypes', getLiquor);
api.use('/getliquor/saveBrands', getLiquor);
// api.use('/launches', launchesRouter);

//add liquor
api.use('/saveLiquor',saveLiquorData) 



//user address api
api.use('/userAdd', savAddressData);
api.use('/userAdd/getAddress', getAddress);

module.exports = api;