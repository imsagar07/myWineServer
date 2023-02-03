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
            "brandId": req.body._id
            // 'img': fs.readFileSync(liquor.image),
            // 'contentType': 'image/png'
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
        console.error(`Could not save liquor brand data ${err}`);
        res.status(400).json({ message: err, status:400 });
    }
}

async function getLiquorTypes(){
    return await liquorType.find({});
}

async function getLiquor() {
    return await liquorBrands.find({});
}

async function getLiquorByid(req) {
    try {
      return await liquorDatas.findById(req).exec();
    } catch (err) {
        console.log(err)
        return err;
    }
}

module.exports = {
    saveLiquorData,
    getLiquor,
    getLiquorByid,
    saveLiquorBrand,
    getLiquorTypes
};