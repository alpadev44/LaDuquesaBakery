const express  = require('express') 
const { 
    createCityController,
    getAllCityController, 
    detailsCityController, 
    updateCityController, 
    deleteCityController
} = require('../controllers/cityController.js')

const cityRouter = express.Router()

cityRouter.post('/create', createCityController)
cityRouter.get('/', getAllCityController)
cityRouter.get('/:id', detailsCityController)
cityRouter.put('/:id', updateCityController)
cityRouter.delete('/:id', deleteCityController)

module.exports = cityRouter

/**
 * @openapi
 * tags:
 *   name: city
 *   description: API para manejar las direcciones
 * /city/create:
 *   post:
 *     tags: [city]
 *     requestBody:
 *       description: crea un nueva direccion
 *       content:
 *          application/json:
 *             schema:
 *                $ref: "#/components/schemas/city"
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
 *                    $ref: "#/components/schemas/city"
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
 * /city:
 *   get:
 *     tags: [city]
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
 *                      $ref: "#/components/schemas/city"
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
 * /city/{id}:
 *   get:
 *     tags: [city]
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
 *                   $ref: "#/components/schemascity"
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
 *     tags: [city]
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
 *                $ref: "#/components/schemas/city"
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
 *     tags: [city]
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