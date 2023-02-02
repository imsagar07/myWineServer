const { saveAddress , getAddressById } = require('../../models/address.model');

async function savAddressData(req, res) {
    return res.status(200).json(await saveAddress(req));
}

async function getAddress(req, res) {
    return res.status(200).json(await getAddressById(req));
}


module.exports = {
    savAddressData,
    getAddress
}
