const express = require("express");
const mongoose = require("mongoose");
const app = express();
const orders_routes = require("./routes/orders")
const transactions_routes = require("./routes/transactions")

app.listen(3000);

app.use(express.json())

app.use('/api/orders', orders_routes)
app.use('/api/transactions', transactions_routes)
