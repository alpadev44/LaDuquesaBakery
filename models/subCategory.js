module.exports = (sequelize, DataTypes) => {
    const SubCategory = sequelize.define("SubCategory", {
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
    });
    SubCategory.associate = function (models) {
        SubCategory.hasOne(models.Category, {
            foreignKey: 'subCategory_id',
            as: 'category',
        });
    };

    return SubCategory;
};
