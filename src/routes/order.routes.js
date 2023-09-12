const express  = require('express') 
const { 
    createOrderController,
    getAllOrderController, 
    detailsOrderController, 
    updateOrderController, 
    deleteOrderController
} = require('../controllers/order.controller.js')

const orderRouter = express.Router()

orderRouter.post('/create', createOrderController)
orderRouter.get('/', getAllOrderController)
orderRouter.get('/:id', detailsOrderController)
orderRouter.put('/:id', updateOrderController)
orderRouter.delete('/:id', deleteOrderController)

module.exports = orderRouter

/**
 * @openapi
 * tags:
 *   name: order
 *   description: API para manejar las imagenes
 * /order/create:
 *   post:
 *     tags: [order]
 *     requestBody:
 *       description: crea un nueva direccion
 *       content:
 *          application/json:
 *             schema:
 *                $ref: "#/components/schemas/order"
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                    $ref: "#/components/schemas/order"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "error interno del servidor"
 * /order:
 *   get:
 *     tags: [order]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                      $ref: "#/components/schemas/order"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: array
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 * /order/{id}:
 *   get:
 *     tags: [order]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of address selected
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: object
 *                   $ref: "#/components/schemas/order"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: array
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 *   put:
 *     tags: [order]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of address selected
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: crea un nueva direccion
 *       content:
 *          application/json:
 *             schema:
 *                $ref: "#/components/schemas/order"
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: string
 *                   example: succesfull update
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 *   delete:
 *     tags: [order]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of address selected
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: string
 *                   example: succesfull delete
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */
