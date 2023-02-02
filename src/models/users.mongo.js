const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true,
  },
},{timestamps:true});

// Connects userSchema with the "Users" collection
module.exports = mongoose.model('Users', userSchema);
