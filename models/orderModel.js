const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
  name:String,
  price: Float,
})

const Product = mongoose.model('Order', OrderSchema)

// const orders = [
//   { id: 1, name: "iPhone", price: 800 },
//   { id: 2, name: "iPad", price: 650 },
//   { id: 3, name: "iWatch", price: 750 },
// ];

module.exports = Product;
