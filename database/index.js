const ConfigureDatabase = require('./config-db')
const ConfigureRelationships = require('./config-relationships')
const ConfigureModels = require('./config-models')

class Database {
  db = {}

  constructor() {
    console.log("==== ConfigureDatabase ====")

    ConfigureDatabase(this.db)
    ConfigureModels(this.db)
    ConfigureRelationships(this.db)
  }
}

const databaseInstance = new Database() // Modules are cached after the first time they are loaded. So this acts as a singleton
module.exports = databaseInstance.db