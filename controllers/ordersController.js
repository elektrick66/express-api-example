const Order = require("../models/orderModel");

const getOrders = ((req, res) => { //getAllOrders
//  res.json(orders);
    console.log('Getting All orders')
    Order.find({})
    .then(result => res.status(200).json({ result }))
    .catch(error => res.status(500).json({msg: error}))
});

const getOrder = ((req, res) => {
    // const id = Number(req.params.orderID)
    // const order = orders.find( order => order.id === id)
    // if (!order) {
    //     return res.status(404).send('Order not found')
    // }
    // res.json(order)
    Order.findOne({ _id: req.params.orderID })
    .then(result => res.status(200).json({ result }))
    .catch(() => res.status(404).json({msg: 'Order not found'}))
});

const createOrder =((req,res)=>{
    // const newOrder ={
    //     id: orders.length+1,
    //     name: req.body.name,
    //     price: req.body.price
    // }
    // orders.push(newOrder);
    // res.status(201).json(newOrder)
    Order.create(req.body)
    .then(result => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({msg:  error }))
});

const updateOrder = ((req,res)=>{
    // const id = Number(req.params.orderID);
    // const index = orders.findIndex(order => order.id === id);
    // const updatedOrder = {
    //     id: orders[index].id,
    //     name: req.body.name,
    //     price: req.body.price       
    // };
    // orders[index] = updatedOrder;
    // res.status(200).json("Order Updated")
    Order.findOneAndUpdate({ _id: req.params.orderID }, req.body, { new: true, runValidators: true })
    .then(result => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({msg: 'Order not found' }))
});

const deleteOrder = ((req,res)=>{
    // const id = Number(req.params.orderID);
    // const index = orders.findIndex(order => order.id === id);
    // orders.splice(index,1)
    // res.status(200).json('Order deleted')   
    Order.findOneAndDelete({ _id: req.params.orderID })
    .then(result => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({msg: 'Order not found' }))
});

module.exports = { 
    getOrders, 
    getOrder, 
    createOrder, 
    updateOrder, 
    deleteOrder 
};
