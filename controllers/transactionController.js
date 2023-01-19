const Transaction = require("../models/transactionModel");

const getTransactions = ((req, res) => {
    // res.json(transactions);
    Transaction.find({})
    .then(result => res.status(200).json({result}))
    .catch(error => res.status(500).json({msg: error}))
  });

const getTransaction = ((req, res) => {
    // const id = Number(req.params.transactionID)
    // const transaction = transactions.find( transaction => transaction.id === id)
    // if (!transaction) {
    //     return res.status(404).send('Transaction not found')
    // }
    // res.json(transaction)
    Transaction.findOne({_id: req.params.transactionID})
    .then(result => res.status(200).json({ result }))
    .catch(() => res.status(404).json({msg: 'Transaction not found'}))
});

const createTransaction =((req,res)=>{
    // const newTransaction ={
    //     id: transactions.length+1,
    //     sender: req.body.sender,
    //     receiver: req.body.receiver,
    //     amount: req.body.amount
    // }
    // transactions.push(newTransaction);
    // res.status(201).json(newTransaction)
    Transaction.create(req.body)
    .then(result => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({msg:  error }))
});

const updateTransaction = ((req,res)=>{
    // const id = Number(req.params.transactionID);
    // const index = transactions.findIndex(transaction => transaction.id === id);
    // const updatedTransaction = {
    //     id: transactions[index].id,
    //     name: req.body.name,
    //     price: req.body.price       
    // };
    // transactions[index] = updatedTransaction;
    // res.status(200).json("Transaction Updated")
    Transaction.findOneAndUpdate({ _id: req.params.transactionID}, req.body, { new: true, runValidators: true })
    .then(result => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({msg: 'Transaction not found' }))
});

const deleteTransaction = ((req,res)=>{
    // const id = Number(req.params.transactionID);
    // const index = transactions.findIndex(transaction => transaction.id === id);
    // transactions.splice(index,1)
    // res.status(200).json('Transaction deleted')   
    Transaction.findOneAndDelete({ _id: req.params.transactionID})
    .then(result => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({msg: 'Transaction not found' }))
});

module.exports = {
    getTransactions,
    getTransaction,
    createTransaction,
    updateTransaction,
    deleteTransaction
};
