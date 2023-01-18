const express = require ("express")
const router = express.Router()

const {
    getTransactions,
    getTransaction,
    createTransaction,
    updateTransaction,
    deleteTransaction
} = require ("../controllers/transactionController")

router.get('/', getTransactions)

router.get('/:orderID', getTransaction)

router.post('/', createTransaction) 

router.put('/:transactionID', updateTransaction) 

router.delete ('/:transactionID', deleteTransaction)

module.exports = router