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
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    housing: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    zone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zipCode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  Address.associate = function (models) {
    Address.hasOne(models.City);
  };
  return Address;
};
