/**
 * @openapi
 * components:
 *   schemas:
 *     address:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 25
 *         street: 
 *           type: string
 *           example: Calle 38
 *         number:
 *            type: string
 *            example: # 77-31
 *         housing: 
 *            type: string
 *            example: segundo piso
 *         zone:
 *            type: string
 *            example: zona norte
 *         zipCode:
 *            type: string
 *            example: 130001 
 */

module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define("Address", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: true,
        },
        street: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        number: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        housing: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        zone: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        zipCode: {
            allowNull: true,
            type: DataTypes.STRING,
        },
    });
    Address.associate = function (models) {
        Address.hasOne(models.City, {
            foreignKey: 'address_id',
            as: 'city',
        });
    };
    return Address;
};
