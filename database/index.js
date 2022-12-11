const ConfigureDatabase = require('./config-db')
const ConfigureRelationships = require('./config-relationships')
const ConfigureModels = require('./config-models')


module.exports = () => {
  const db = {}

  console.log("==== ConfigureDatabase ====")

  ConfigureDatabase(db)
  ConfigureModels(db)
  ConfigureRelationships(db)

  global.db = db
}