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
 *           example: chocolate cookies
 *         sku:
 *           type: string
 *           example:
 *         price:
 *           type: string
 *           example: 12.5
 *         ingredients:
 *           type: string
 *           example: chocolate, eggs, etc
 *         score:
 *            type: integer
 *            example: 4
 *         product_id:
 *            type: integer
 *            example: 5
 *         category_id:
 *            type: integer
 *            example: 6
 *         city_id:
 *            type: integer
 *            example: 6
 *         image_id:
 *            type: integer
 *            example: 6
 */

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
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
    sku: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    price: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    ingredients: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    discount: {
      allowNull: true,
      type: DataTypes.DOUBLE,
    },
    score: {
      allowNull: true,
      type: DataTypes.INTEGER,
      validate: { min: 0, max: 5 },
    },
    category_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: "Categories",
        key: "id",
      },
    },
    city_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: "Cities",
        key: "id",
      },
    },
    image_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: "Images",
        key: "id",
      },
    },
  });
  Product.associate = function (models) {
    Product.hasOne(models.Category),
      Product.belongsTo(models.City),
      Product.hasOne(models.Image);
    Product.belongsToMany(models.Order, {
      through: "orderProduct",
    });
  };

  return Product;
};
