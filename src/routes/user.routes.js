const express  = require('express') 
const  { 
    createUserController,
    getAllUserController, 
    detailsUserController, 
    updateUserController, 
    deleteUserController
} = require('../controllers/user.controller.js')

const userRouter = express.Router()

userRouter.post('/create', createUserController)
userRouter.get('/', getAllUserController)
userRouter.get('/:id', detailsUserController)
userRouter.put('/:id', updateUserController)
userRouter.delete('/:id', deleteUserController)

module.exports = userRouter

/**
 * @openapi
 * tags:
 *   name: user
 *   description: API para manejar las imagenes
 * /user/create:
 *   post:
 *     tags: [user]
 *     requestBody:
 *       description: crea un nueva direccion
 *       content:
 *          application/json:
 *             schema:
 *                $ref: "#/components/schemas/user"
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
 *                    $ref: "#/components/schemas/user"
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
 * /user:
 *   get:
 *     tags: [user]
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
 *                      $ref: "#/components/schemas/user"
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
 * /user/{id}:
 *   get:
 *     tags: [user]
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
 *                   $ref: "#/components/schemas/user"
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
 *     tags: [user]
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
 *                $ref: "#/components/schemas/user"
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
 *     tags: [user]
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
