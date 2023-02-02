const { addUserToDatabase, signIn } = require('../../models/users.model');
const { signUp } = require('../../models/users.model');

async function addUserData(req, res) {
  return res.status(200).json(await addUserToDatabase(req));
}

async function signUpdata(req,res){
   return await signUp(req,res);
}

async function signInData(req,res){
  return await signIn(req,res);
}

module.exports = {
  addUserData,
  signUpdata,
  signInData
};