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
        product_id: {
            type: DataTypes.BIGINT,
            allowNull: true,
            references: {
                model: 'Products'
            }
        },
        user_id: {
            type: DataTypes.BIGINT,
            allowNull: true,
            references: {
                model: 'Users'
            }
        }
    })
    Order.associate = function (models) {
        Order.belongsTo(models.Product , {
            foreignKey: 'product_id',
            as: 'product'
        }),
        Order.hasOne(models.User, {
            foreignKey: 'user_id',
            as: 'user',
        })
    }
   
    return Order
}