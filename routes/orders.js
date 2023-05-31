const express = require ("express")
const router = express.Router()

const {
    getOrders,
    getOrder, 
    createOrder, 
    updateOrder, 
    deleteOrder
} = require ("../controllers/ordersController")

/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Retrieve a list of all orders
 *     description: Retrieve a list of orders.
 *     responses:
 *       200:
 *         description: A list of orders.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: The order ID.
 *                         example: 63c991d4ee6fc0ec8f9147e9
 *                       name:
 *                         type: string
 *                         description: The order's name.
 *                         example: headphones
 *                       price:
 *                         type: integer
 *                         description: The order's price.
 *                         example: 100
*/
router.get('/', getOrders)

/**
 * @swagger
 * /api/orders/{id}:
 *   get:
 *     summary: Retrieve a specific order
 *     description: Retrieve an order.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Unique ID of the order to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: An order.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: The order ID.
 *                         example: 63c991d4ee6fc0ec8f9147e9
 *                       name:
 *                         type: string
 *                         description: The order's name.
 *                         example: headphones
 *                       price:
 *                         type: integer
 *                         description: The order's price.
 *                         example: 100
*/
router.get('/:orderID', getOrder)

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new order.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The order's name.
 *                 example: headphones
 *               price:
 *                 type: int
 *                 description: The order's price.
 *                 example: 100
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  name:
 *                    type: string
 *                    description: The order's name.
 *                    example: headphones
 *                  price:
 *                    type: integer
 *                    description: The order's price.
 *                    example: 100
 * 
*/
router.post('/', createOrder) 

/**
 * @swagger
 * /api/orders/{id}:
 *   get:
 *     summary: Retrieve a specific order
 *     description: Retrieve an order.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Unique ID of the order to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: An order.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: The order ID.
 *                         example: 63c991d4ee6fc0ec8f9147e9
 *                       name:
 *                         type: string
 *                         description: The order's name.
 *                         example: headphones
 *                       price:
 *                         type: integer
 *                         description: The order's price.
 *                         example: 100
*/
router.put('/:orderID', updateOrder) 

router.delete ('/:orderID', deleteOrder)

module.exports = router