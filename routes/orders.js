const express = require ("express")
const router = express.Router()

const {
    getOrders,
    getOrder, 
    createOrder, 
    updateOrder, 
    deleteOrder
} = require ("../controllers/ordersController")

router.get('/', getOrders)

router.get('/:orderID', getOrder)

router.post('/', createOrder) 

router.put('/:orderID', updateOrder) 

router.delete ('/:orderID', deleteOrder)

module.exports = router