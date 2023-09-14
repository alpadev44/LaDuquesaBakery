/**
 * @openapi
 * components:
 *   schemas:
 *     role:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 25
 *         name:
 *           type: string
 *           example: usuario
 */

module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define("Role", {
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
  });
  Role.associate = function (models) {
    Role.hasOne(models.User);
  };
  return Role;
};
