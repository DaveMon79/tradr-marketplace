const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Payment extends Model { }

Payment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        payment_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        card_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        expiry_date: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'user',
              key: 'id',
            },
          },
        },
        {
          hooks: {
            beforeCreate: async (newCardNumber) => {
              newCardNumber.card_number = await bcrypt.hash(newCardNumber.card_number, 10);
              return newCardNumber;
            },
            beforeUpdate: async (updatedCardNumber) => {
              updatedCardNumber.card_number = await bcrypt.hash(updatedCardNumber.card_number, 10);
              return updatedCardNumber;
            },
          },

          hooks: {
            beforeCreate: async (newExpiry) => {
              newExpiry.expiry_date = await bcrypt.hash(newExpiry.expiry_date, 10);
              return newExpiry;
            },
            beforeUpdate: async (updatedExpiry) => {
              updatedExpiry.expiry_date = await bcrypt.hash(updatedExpiry.expiry_date, 10);
              return updatedExpiry;
            },
          },
          sequelize,
          timestamps: false,
          freezeTableName: true,
          underscored: true,
          modelName: 'payment',
        }
      );

module.exports = Payment;