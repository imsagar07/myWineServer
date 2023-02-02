const mongoose = require('mongoose');

const liquorBrand = new mongoose.Schema({
    brandName: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
   
});

const liquorTypes = new mongoose.Schema({
   typeName:{
       type:String,
       required:true
   }
});

// Connects userSchema with the "Users" collection
const liquorBrands = mongoose.model('liquorBrands', liquorBrand);
const liquorType = mongoose.model('liquortypes', liquorTypes);
module.exports = {
    liquorBrands,
    liquorType
}
//  mongoose.model('liquorBrands', liquorBrand);
