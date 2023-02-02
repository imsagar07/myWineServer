const addressModel = require('./address.mongo');

async function saveAddress(reqData) {
    try {
        const address = new addressModel({
            address1: reqData.body.address1,
            streetName: reqData.body.streetName,
            locality: reqData.body.locality,
            state: reqData.body.state,
            city: reqData.body.city,
            pincode: reqData.body.pincode,
            lat: reqData.body.lat,
            long: reqData.body.long,
            userId: reqData.body.userId
        })
        await address.save();
    } catch (err) {
        return err;
    }
}

async function getAddressById(req) {
    try {
        return await addressModel.find({ userId: req.body.userId });
    } catch (err) {
        return err;
    }
}

module.exports = {
    saveAddress,
    getAddressById
}
