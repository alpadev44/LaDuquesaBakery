/**
 * @openapi
 * components:
 *   schemas:
 *     subCategory:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 25
 *         name:
 *           type: integer
 *           example: 5
 *         description:
 *           type: integer
 *           example: 5
 *         url:
 *           type: string
 *           example: https://laDuquesaBakery.com/cookies
 */

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
        SubCategory.hasOne(models.Category);
    };

    return SubCategory;
};
