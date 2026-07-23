const {Schema} = require("mongoose");

const OrderSchema = new Schema({
    name:String,
    qty:Number,
    price:Number,
    mode:String,
    owner:{
        type:Schema.Types.ObjectId,
        ref:"UserModel",
      },
});

module.exports = {OrderSchema};