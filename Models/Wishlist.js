const mongoose = require('mongoose');
const { Schema } = mongoose;

const cart = new Schema({
    image : String,
    name : String,
    price : String,
    currency : String,
    description : String,
    _id : String,
    default : 0
})
const order = new Schema({
    image : String,
    name : String,
    price : String,
    currency : String,
    description : String,
    _id : String,
    address : String,
    date : String,
    default : 0
})

const wish = new Schema({
    image : String,
    name : String,
    price : String,
    currency : String,
    description : String,
    wishlist : Boolean,
    _id : String,
    default : 0
})

const wishlist  = new Schema({
    email : String,
    wish : [wish],
    cart : [cart],
    order : [order],
})


const Wishlist = mongoose.model('wishlist', wishlist);
module.exports = Wishlist;