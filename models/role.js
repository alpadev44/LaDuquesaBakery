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
        Role.hasMany(models.User, {
            foreignKey: 'role_id',
            as: 'users',
        });
    };
    return Role;
};
