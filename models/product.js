module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: true,
        },
        name: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        sku: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        price: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        ingredients: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        score: {
            allowNull: true,
            type: DataTypes.INTEGER,
            validate: { min: 0, max: 5 }
        },
        dateCreated: {
            allowNull: true,
            type: DataTypes.DATE
        },
        category_id: {
            type: DataTypes.BIGINT,
            allowNull: true,
            references: {
                model: 'Categories',
                key: 'id'
            }
        },
        city_id: {
            type: DataTypes.BIGINT,
            allowNull: true,
            references: {
                model: 'Cities',
                key: 'id'
            }
        },
        image_id: {
            type: DataTypes.BIGINT,
            allowNull: true,
            references: {
                model: 'Images',
                key: 'id'
            }
        }
    })
    Product.associate = function (models) {
        Product.belongsTo(models.Category , {
            foreignKey: 'category_id',
            as: 'category'
        }),
        Product.belongsTo(models.City , {
            foreignKey: 'city_id',
            as: 'city'
        }),
        Product.hasOne(models.Image, {
            foreignKey: 'image_id',
            as: 'image',
        });
    }
    
    return Product
}


