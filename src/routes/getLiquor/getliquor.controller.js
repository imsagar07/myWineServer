const { getLiquor ,getLiquorTypes} = require('../../models/liquor.model');
const { saveLiquorBrand } = require('../../models/liquor.model');
async function getLiquorsData(req, res) {
  return res.status(200).json(await getLiquor());
}

async function getLiquorsTypes(req, res) {
  return res.status(200).json(await getLiquorTypes());
}

async function saveLiquorBrands(req, res) {
  return await saveLiquorBrand(req, res);
}

module.exports = {
    getLiquorsData,
    saveLiquorBrands,
    getLiquorsTypes
};