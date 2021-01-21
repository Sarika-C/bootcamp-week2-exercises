const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the total number of users
  const totalUsers = await User.query().resultSize()
  console.log(totalUsers)

  // Get the average age of users
  const avgUserAge = await User.query().avg('age as avgAge')
  console.log(avgUserAge)

  // Get the total number of dogs
  const totalDogs = await Pet.query().where('type', 'DOG').resultSize()
  console.log(totalDogs)
  
  // -----
  cleanup()
}

run()
