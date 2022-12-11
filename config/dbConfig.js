module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: 'w1654187',
  DB: 'sample_db',
  dialect: 'mysql',

  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
  }
}