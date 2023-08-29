module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("Category", {
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
        description: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        url: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        subCategory_id: {
            type: DataTypes.BIGINT,
            allowNull: true,
            references: {
                model: 'SubCategories',
                key: 'id'
            }
        }
    })
    Category.associate = function(models) {
        Category.belongsTo(models.SubCategory, {
            foreignKey: 'subCategory_id',
            as: 'category',
            onDelete: 'CASCADE' 
        }),
        Category.hasOne(models.Product, {
            foreignKey: 'category_id',
            as: 'product',
        })
    };
    
    return Category
}