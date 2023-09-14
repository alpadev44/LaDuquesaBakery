/**
 * @openapi
 * components:
 *   schemas:
 *     category:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 25
 *         name:
 *           type: string
 *           example: postre
 *         description:
 *            type: string
 *            example: sabor a cielo estrellado
 *         url:
 *            type: string
 *            example: www.duquesaBakery.com/postres
 *         subCategory_id:
 *            type: integer
 */
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
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
    description: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    url: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    subCategory_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: "SubCategories",
        key: "id",
      },
    },
  });
  Category.associate = function (models) {
    Category.hasOne(models.SubCategory, {
      as: "sub",
    });
    // cambie la cardinalidad de la relacion, la inverti
    Category.belongsTo(models.Product);
    // cambie la cardinalidad de la relacion, la inverti
  };

  return Category;
};
