const { DataTypes } = require('sequelize');

// ======== Configure models ========
module.exports = (db) => {
  db.products = require('../models/productModel')(db.sequelize, DataTypes)
  db.reviews = require('../models/reviewModel.js')(db.sequelize, DataTypes)
}