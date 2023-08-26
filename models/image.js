module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define("Image", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: true,
        },
        url: {
            allowNull: true,
            type: DataTypes.STRING,
        }
    })
    Image.associate = function (models) {
        Image.belongsTo(models.Product , {
            foreignKey: 'image_id',
            as: 'product'
        })
    }
    return Image
}