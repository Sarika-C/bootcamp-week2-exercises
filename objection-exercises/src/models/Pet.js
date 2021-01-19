const BaseModel = require('./BaseModel')

class Pet extends BaseModel {
  static get tableName() {
    return 'pets'
  }

  static get relationMappings() {
    return {
      pets: {
        relation: BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'pets.ownerId',
          to: 'users.id',
        },
      },
    }
  }
}

module.exports = Pet
