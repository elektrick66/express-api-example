const mongoose = require ('mongoose')

const TransactionSchema = new mongoose.Schema({
  sender: String,
  receiver: String,
  amount: Number,
})

const Transaction = mongoose.model('Transaction',TransactionSchema)

// const transactions = [
//     { id: 1, sender: "Louay", receiver: "Aymen", amount: 800 },
//     { id: 2, sender: "Aymen", receiver: "Malek", amount: 400 },
//     { id: 3, sender: "Malek", receiver: "Mohamed", amount: 800 },

//   ];
  
  module.exports = Transaction;
  