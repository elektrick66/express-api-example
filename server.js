const express = require("express");
const mongoose = require("mongoose");
const app = express();

const orders_routes = require("./routes/orders")
const transactions_routes = require("./routes/transactions")

require('dotenv').config()

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for retrieving data from mongodb',
    version: '1.0.0',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

app.listen(process.env.PORT || 3000,()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})
mongoose.connect(process.env.MONGO_URI)
    .then((result) => console.log('Database running'))
    .catch((err) => console.log(Error))

app.use(express.json())

app.use('/api/orders', orders_routes)
app.use('/api/transactions', transactions_routes)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
