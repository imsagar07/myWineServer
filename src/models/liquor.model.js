const liquorDatas = require('./liquor.mongo');
const {liquorBrands, liquorType} = require('./liquorBrand.mongo');


var fs = require('fs');
async function saveLiquorData(req, res) {
    try {
        const liquorData = new liquorDatas({
            "brandType": req.body.brandType,
            "liquorname": req.body.liquorname,
            "description": req.body.description,
            "liquorType": req.body.liquorType,
            "img": req.body.img,
            "brandId": req.body.brandId
        });
        await liquorData.save();
        res.status(200).json({ message: 'Save Suceessfully', status:200 });
    } catch (err) {
        res.status(400).json({ message: err, status:400 });
    }
}


async function saveLiquorBrand(req, res){
    try {
        const liquorBrand = new liquorBrands({
            brandName:req.body.brandName,
            image:req.body.image
        });
        await liquorBrand.save();
        res.status(200).json({ message: 'Save Suceessfully', status:200 });
    }
    catch(err){
        res.status(400).json({ message: err, status:400 });
    }
}

async function getLiquorTypes(){
    return await liquorType.find({});
}

async function getLiquor() {
    return await liquorBrands.find({});
}

async function getLiquorByid(req,res) {
    try {
      let liquorD = await liquorDatas.find({ brandId: req.body.id}).exec();
      if(liquorD.length){
        res.status(200).json({ liquor: liquorD, status:200 });
      }
      else{
        res.status(200).json({ message: 'No record found', status:400 });
      }
    } catch (err) {
        res.status(500).json({ message: err, status:500 });
    }
}

module.exports = {
    saveLiquorData,
    getLiquor,
    getLiquorByid,
    saveLiquorBrand,
    getLiquorTypes
};