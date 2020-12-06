const { Model, DataTypes } = require("sequelize");
const sequelize = require("./database-connection");

class Product extends Model {}

Product.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
    },
  },
  {
    sequelize,
    modelName: "Product",
    timestamps: false,
  }
);

module.exports = Product;
