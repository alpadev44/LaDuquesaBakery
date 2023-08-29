const express  = require('express') 
const { 
    createImageController,
    getAllImageController, 
    detailsImageController, 
    updateImageController, 
    deleteImageController
} = require('../controllers/imageController.js')

const imageRouter = express.Router()

imageRouter.post('/create', createImageController)
imageRouter.get('/', getAllImageController)
imageRouter.get('/:id', detailsImageController)
imageRouter.put('/:id', updateImageController)
imageRouter.delete('/:id', deleteImageController)

module.exports = imageRouter

/**
 * @openapi
 * tags:
 *   name: image
 *   description: API para manejar las imagenes
 * /image/create:
 *   post:
 *     tags: [image]
 *     requestBody:
 *       description: crea un nueva direccion
 *       content:
 *          application/json:
 *             schema:
 *                $ref: "#/components/schemas/image"
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
 *                    $ref: "#/components/schemas/image"
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
 * /image:
 *   get:
 *     tags: [image]
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
 *                      $ref: "#/components/schemas/image"
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
 * /image/{id}:
 *   get:
 *     tags: [image]
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
 *                   $ref: "#/components/schemas/image"
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
 *     tags: [image]
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
 *                $ref: "#/components/schemas/image"
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
 *     tags: [image]
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
