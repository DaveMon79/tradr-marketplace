const User = require('./User')
const Cart = require('./Cart');
const Category = require('./Category');
const Payment = require('./Payment');
const Product = require('./Product');
const Wishlist = require('./Wishlist');
const Address = require('./Address');
const Purchase = require('./Purchase');
const Order = require('./Order');

User.belongsTo(Cart, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Cart.belongsTo(User, {
    foreignKey: 'user_id',
});


User.hasMany(Address, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Address.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Payment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Payment.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Wishlist, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Wishlist.belongsTo(User, {
    foreignKey: 'user_id',
});


Category.hasMany(Product, {
    foreignKey: 'category_id',

});

Product.belongsTo(Category, {
    foreignKey: 'category_id'
});


Product.hasMany(Cart, {
    foreignKey: 'product_id',

});

Cart.belongsTo(Product, {
    foreignKey: 'product_id'
});


Wishlist.hasMany(Product, {
    foreignKey: 'user_id',

});

Product.hasMany(Wishlist, {
    foreignKey: 'product_id',
});

User.hasMany(Product, {
    foreignKey: 'user_id',

});

Product.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Purchase, {
    foreignKey: 'user_id',

});

Purchase.belongsTo(User, {
    foreignKey: 'user_id',
});

// Products belongToMany Purchase (through Order)
Product.belongsToMany(Purchase, {
    through: {
      model: Order,
    //   unique: false
    }
});

// Purchase belongToMany Products (through Order)
Purchase.belongsToMany(Product, {
    through: {
      model: Order,
    //   unique: false
    }
});


module.exports = { Address, Cart, Category, Payment, Product, User, Wishlist, Purchase, Order };