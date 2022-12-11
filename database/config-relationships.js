// ======== Configure relationships ========
module.exports = (db) => {
  db.products.hasMany(db.reviews, {
    foreignKey: 'product_id',
    as: 'review'
  })
  db.reviews.belongsTo(db.products, {
    foreignKey: 'product_id',
    as: 'product'
  })
}