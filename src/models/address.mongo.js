const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    address1: {
        type: String,
        required: true
    },
    streetName: {
        type: String,
        required: true
    },
    locality: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    long: {
        type: Number,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
})

addressSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });


module.exports = mongoose.model('address', addressSchema);