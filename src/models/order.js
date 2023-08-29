/**
 * @openapi
 * components:
 *   schemas:
 *     order:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 25
 *         shoppingCardId:
 *           type: integer
 *           example: 5
 *         customerService:
 *           type: integer
 *           example: 5
 *         subtotal:
 *           type: number
 *           example: 12.5
 *         bonus:
 *           type: number
 *           example: 25.0
 *         total:
 *            type: number
 *            example: 100.5
 *         product_id:
 *            type: integer
 *            example: 5
 *         user_id: 
 *            type: integer
 *            example: 6  
 */

module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define("Order", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: true,
        },
        orderTackingNumber: {
            allowNull: true,
            type: DataTypes.INTEGER,
        },
        shoppingCartId: {
            allowNull: true,
            type: DataTypes.INTEGER,
        },
        customerService: {
            allowNull: true,
            type: DataTypes.INTEGER,
        },
        subtotal: {
            allowNull: true,
            type: DataTypes.DOUBLE,
        },
        bonus: {
            allowNull: true,
            type: DataTypes.DOUBLE,
        }, 
        total: {
            allowNull: true,
            type: DataTypes.DOUBLE,
        },
        // product_id: {
        //     type: DataTypes.BIGINT,
        //     allowNull: true,
        //     references: {
        //         model: 'Products'
        //     }
        // },
        user_id: {
            type: DataTypes.BIGINT,
            allowNull: true,
            references: {
                model: 'Users'
            }
        }
    })
    Order.associate = function (models) {
        Order.belongsToMany(models.Product , {
            through: 'orderProduct'
        })
        Order.hasOne(models.User, {
            foreignKey: 'user_id',
            as: 'user',
        })
    }
   
    return Order
}