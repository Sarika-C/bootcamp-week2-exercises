const cleanup = require('../lib/cleanup')
const Pet = require('../models/Pet')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert yourself in the users table
  const me = await User.query().insert({
    email: 'hello@gmail.com',
    firstName: 'Elena',
    lastName: 'Charlotte',
    age: 20
  })
  console.log(me)

  // Insert a pet belonging to you (get your ID from Postico or DBeaver)
  const myPet = await Pet.query().insert({
    ownerId: 'myID',
    type: 'ALLIGATOR',
    name: 'Shakira'
  })
  // -----
  cleanup()
}

run()
