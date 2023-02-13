const { saveLiquorData,getLiquorByid,saveLiquorBrand } = require('../../models/liquor.model');

async function addLiquorData(req, res) {
  return await saveLiquorData(req, res);
}


async function getLiquorByidData(req, res) {
  return await getLiquorByid(req, res);
}

async function saveLiquorBrands(req, res) {
  return await saveLiquorBrand(req, res);
}

module.exports = {
  addLiquorData,
  getLiquorByidData,
  saveLiquorBrands
};