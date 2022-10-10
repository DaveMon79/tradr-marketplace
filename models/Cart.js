const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cart extends Model { }

Cart.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        quantity: {
            type: DataTypes.INT,
            allowNull: false,
        },
        order_total: {
            type: DataTypes.DECIMAL,
            allowNull: true,
            validate: {
                isDecimal: true,
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'user',
              key: 'id',
            },
          },
          product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'product',
              key: 'id',
            },
          },
      
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'cart',
    }
);

module.exports = Cart;