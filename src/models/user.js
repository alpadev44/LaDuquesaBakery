/**
 * @openapi
 * components:
 *   schemas:
 *     product:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 25
 *         name:
 *           type: string
 *           example: alejandro
 *         lastName:
 *           type: string
 *           example: Vergara
 *         email:
 *           type: string
 *           example: email@email.com
 *         password:
 *           type: string
 *           example: es un hash
 *         phone:
 *            type: string
 *            example: +57 3145970715
 *         role_id:
 *            type: integer
 *            example: 5
 */

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.BIGINT,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: "Roles",
        key: "id",
      },
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
  User.associate = function (models) {
    User.belongsTo(models.Role);
    User.hasOne(models.Order);
    //User.hasmany(models.Order);

    //cambie la relacion de user con order de uno a muchos, puesto que un usuario deberia tener la facultad
    //de hacer varias ordenes
  };
  return User;
};
