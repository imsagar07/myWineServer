const { saveLiquorData } = require('../../models/liquor.model');

async function addLiquorData(req, res) {
  // return res.status(200).json(await saveLiquorData(req));
  return await saveLiquorData(req, res);
}

module.exports = {
  addLiquorData,
};