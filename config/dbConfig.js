module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: 'w1654187',
  DB: 'jot_db_test',
  dialect: 'mysql',

  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
  }
}