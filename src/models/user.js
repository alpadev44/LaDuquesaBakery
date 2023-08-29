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