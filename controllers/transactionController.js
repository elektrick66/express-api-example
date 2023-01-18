const transactions = require("../models/transactionModel");

const getTransactions = ((req, res) => {
    res.json(transactions);
  });

const getTransaction = ((req, res) => {
    const id = Number(req.params.transactionID)
    const transaction = transactions.find( transaction => transaction.id === id)
    if (!transaction) {
        return res.status(404).send('Transaction not found')
    }
    res.json(transaction)
});

const createTransaction =((req,res)=>{
    const newTransaction ={
        id: transactions.length+1,
        sender: req.body.sender,
        receiver: req.body.receiver,
        amount: req.body.amount
    }
    transactions.push(newTransaction);
    res.status(201).json(newTransaction)
});

const updateTransaction = ((req,res)=>{
    const id = Number(req.params.transactionID);
    const index = transactions.findIndex(transaction => transaction.id === id);
    const updatedTransaction = {
        id: transactions[index].id,
        name: req.body.name,
        price: req.body.price       
    };
    transactions[index] = updatedTransaction;
    res.status(200).json("Transaction Updated")
});

const deleteTransaction = ((req,res)=>{
    const id = Number(req.params.transactionID);
    const index = transactions.findIndex(transaction => transaction.id === id);
    transactions.splice(index,1)
    res.status(200).json('Transaction deleted')   
});

module.exports = {
    getTransactions,
    getTransaction,
    createTransaction,
    updateTransaction,
    deleteTransaction
};
