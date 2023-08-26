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
