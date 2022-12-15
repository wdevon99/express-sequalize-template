const dbConfig = require('../config/dbConfig.js');
const { Sequelize } = require('sequelize');


// ======== Configure database ========
module.exports = (db) => {
  const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  })
  
  sequelize.authenticate()
    .then(() => console.log('DB Connected!'))
    .catch(err => console.log('Error Connecting to DB' + err));
    
  db.Sequelize = Sequelize
  db.sequelize = sequelize
}