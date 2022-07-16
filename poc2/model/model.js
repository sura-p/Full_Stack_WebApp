const bcrypt = require('bcryptjs/dist/bcrypt');
const mongoose = require('mongoose');

const sche = mongoose.Schema({
    first_name: {
      type: String,
      required: true
      
    },
    last_name: {
      type: String,
      required: true
  
    },

    email : {
      type:String,
      required:true,
      unique :true

    },
  
    mobile_number: {
      type: String,
      required: true
    },
    password:
    {
      type:String,
      required: true
    }
  
  });
  
  // making model

  // sche.pre('save',async function (next) {
  //   const passHash = await bcrypt.hash(sche.password,10);
  //   next();
  // })
  
  const Coll = new mongoose.model("employee", sche);

  module.exports = Coll;