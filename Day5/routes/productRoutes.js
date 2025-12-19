const express = require('express');
const { getProducts, getProductById } = require('../controllers/productController');

const router = express.Router();

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     parameters:
 *       - in: query
 *         name: keyword
 *         schema:
 *           type: string
 *         description: Search keyword (searches in name and description)
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of products per page
 *     responses:
 *       200:
 *         description: List of products retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get('/', getProducts);

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Get a single product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product ID
 *     responses:
 *       200:
 *         description: Product details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 */
router.get('/:id', getProductById);

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "60d21b4667d0d8992e610c90"
 *         name:
 *           type: string
 *           example: "Sample Product"
 *         image:
 *           type: string
 *           example: "/images/sample.jpg"
 *         brand:
 *           type: string
 *           example: "Sample Brand"
 *         category:
 *           type: string
 *           example: "Electronics"
 *         description:
 *           type: string
 *           example: "This is a great sample product with amazing features."
 *         rating:
 *           type: number
 *           format: float
 *           example: 4.5
 *         numReviews:
 *           type: integer
 *           example: 120
 *         price:
 *           type: number
 *           format: float
 *           example: 99.99
 *         countInStock:
 *           type: integer
 *           example: 15
 *         reviews:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *               name:
 *                 type: string
 *               rating:
 *                 type: number
 *               comment:
 *                 type: string
 *               user:
 *                 type: string
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *           description: List of reviews (only included on single product endpoint usually)
 *         createdAt:
 *           type: string
 *           format: date-time
 */

module.exports = router;