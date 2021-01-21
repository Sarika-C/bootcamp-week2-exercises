const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users with a specific name (pick it from your database)
  const allAvas = await User.query().where('firstName', 'Ava')
  console.log(allAvas)

  // Do the same with object notation

  // Get all DOGS and BIRDS
  const allDogsAndBirds = await Pet.query().where('type', 'DOG').orWhere('type', 'BIRD')
  console.log(allDogsAndBirds)

  // -----
  cleanup()
}

run()
