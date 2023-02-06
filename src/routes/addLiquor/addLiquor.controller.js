const { saveLiquorData,getLiquorByid } = require('../../models/liquor.model');

async function addLiquorData(req, res) {
  return await saveLiquorData(req, res);
}


async function getLiquorByidData(req, res) {
  return await getLiquorByid(req, res);
}

module.exports = {
  addLiquorData,
  getLiquorByidData
};