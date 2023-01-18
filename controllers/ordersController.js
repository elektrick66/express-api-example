const orders = require("../models/orderModel");

const getOrders = ((req, res) => {
  res.json(orders);
});

const getOrder = ((req, res) => {
    const id = Number(req.params.orderID)
    const order = orders.find( order => order.id === id)
    if (!order) {
        return res.status(404).send('Order not found')
    }
    res.json(order)
});

const createOrder =((req,res)=>{
    const newOrder ={
        id: orders.length+1,
        name: req.body.name,
        price: req.body.price
    }
    orders.push(newOrder);
    res.status(201).json(newOrder)
});

const updateOrder = ((req,res)=>{
    const id = Number(req.params.orderID);
    const index = orders.findIndex(order => order.id === id);
    const updatedOrder = {
        id: orders[index].id,
        name: req.body.name,
        price: req.body.price       
    };
    orders[index] = updatedOrder;
    res.status(200).json("Order Updated")
});

const deleteOrder = ((req,res)=>{
    const id = Number(req.params.orderID);
    const index = orders.findIndex(order => order.id === id);
    orders.splice(index,1)
    res.status(200).json('Order deleted')   
});

module.exports = { 
    getOrders, 
    getOrder, 
    createOrder, 
    updateOrder, 
    deleteOrder 
};
