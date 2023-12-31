module.exports = (sequelize, DataTypes) => {
    const City = sequelize.define("City", {
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
        country: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        address_id: {
            type: DataTypes.BIGINT,
            allowNull: true,
            references: {
                model: 'Addresses',
                key: 'id'
            }
        }
    })
    City.associate = function (models) {
        City.belongsTo(models.Address, {
            foreignKey: 'address_id',
            as: 'address',
            onDelete: 'CASCADE'
        }),
        City.hasOne(models.Product, {
            foreignKey: 'city_id',
            as: 'product',
        });
    };
    
    return City
}