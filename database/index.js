const ConfigureDatabase = require('./config-db')
const ConfigureRelationships = require('./config-relationships')
const ConfigureModels = require('./config-models')

class Database {
  db = {}

  constructor() {
    ConfigureDatabase(this.db)
    ConfigureModels(this.db)
    ConfigureRelationships(this.db)

    db.sequelize.sync({ force: true, match: /_test$/ }).then(() => console.log('=== Re-Sync Done! ==='))
  }
}

const databaseInstance = new Database() // Modules are cached after the first time they are loaded. So this acts as a singleton
module.exports = databaseInstance.db