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
            allowNull: true,
        },
        name: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        lastName: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        email: {
            allowNull: true,
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        phone: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        role_id: {
            type: DataTypes.BIGINT,
            allowNull: true,
            references: {
                model: 'Roles',
                key: 'id'
            }
        }
    })
    User.associate = function (models) {
        User.belongsTo(models.Role, {
            foreignKey: 'role_id',
            as: 'role'
        }),
        User.associate = function (models) {
            User.hasOne(models.User, {
                foreignKey: 'user_id',
                as: 'user',
            });
        };
    
    }
    return User
}