const express = require('express');
const { addOrderItems, getOrderById } = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - orderItems
 *               - shippingAddress
 *               - paymentMethod
 *               - itemsPrice
 *               - taxPrice
 *               - shippingPrice
 *               - totalPrice
 *             properties:
 *               orderItems:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     qty:
 *                       type: integer
 *                     image:
 *                       type: string
 *                     price:
 *                       type: number
 *                     product:
 *                       type: string
 *                 example:
 *                   - name: "Sample Product"
 *                     qty: 2
 *                     image: "/images/sample.jpg"
 *                     price: 99.99
 *                     product: "60d21b4667d0d8992e610c85"
 *               shippingAddress:
 *                 type: object
 *                 properties:
 *                   address: { type: string }
 *                   city: { type: string }
 *                   postalCode: { type: string }
 *                   country: { type: string }
 *                 example:
 *                   address: "123 Main St"
 *                   city: "New York"
 *                   postalCode: "10001"
 *                   country: "USA"
 *               paymentMethod:
 *                 type: string
 *                 example: "PayPal"
 *               itemsPrice:
 *                 type: number
 *                 example: 199.98
 *               taxPrice:
 *                 type: number
 *                 example: 29.99
 *               shippingPrice:
 *                 type: number
 *                 example: 0
 *               totalPrice:
 *                 type: number
 *                 example: 229.97
 *     responses:
 *       201:
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       400:
 *         description: Invalid order data
 */
router.post('/', protect, addOrderItems);

/**
 * @swagger
 * /api/orders/{id}:
 *   get:
 *     summary: Get order by ID
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The order ID
 *     responses:
 *       200:
 *         description: Order details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       404:
 *         description: Order not found
 *       401:
 *         description: Not authorized to view this order
 */
router.get('/:id', protect, getOrderById);

/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         user:
 *           type: object
 *           properties:
 *             _id:
 *               type: string
 *             name:
 *               type: string
 *             email:
 *               type: string
 *         orderItems:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               qty:
 *                 type: integer
 *               image:
 *                 type: string
 *               price:
 *                 type: number
 *               product:
 *                 type: string
 *         shippingAddress:
 *           type: object
 *           properties:
 *             address:
 *               type: string
 *             city:
 *               type: string
 *             postalCode:
 *               type: string
 *             country:
 *               type: string
 *         paymentMethod:
 *           type: string
 *         paymentResult:
 *           type: object
 *           nullable: true
 *         itemsPrice:
 *           type: number
 *         taxPrice:
 *           type: number
 *         shippingPrice:
 *           type: number
 *         totalPrice:
 *           type: number
 *         isPaid:
 *           type: boolean
 *           default: false
 *         paidAt:
 *           type: string
 *           format: date-time
 *           nullable: true
 *         isDelivered:
 *           type: boolean
 *           default: false
 *         deliveredAt:
 *           type: string
 *           format: date-time
 *           nullable: true
 *         createdAt:
 *           type: string
 *           format: date-time
 *       example:
 *         _id: "60d21b4667d0d8992e610c90"
 *         user:
 *           _id: "60d21b4667d0d8992e610c85"
 *           name: "John Doe"
 *           email: "john@example.com"
 *         orderItems: [ ... ]
 *         shippingAddress: { ... }
 *         paymentMethod: "PayPal"
 *         itemsPrice: 199.98
 *         taxPrice: 29.99
 *         shippingPrice: 0
 *         totalPrice: 229.97
 *         isPaid: false
 *         isDelivered: false
 */

module.exports = router;