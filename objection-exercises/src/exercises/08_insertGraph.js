const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert a new person name Peter Bynum with two pet DOGs named Rocco & Rosey
  const peter = await User.query().insertGraph({
    email: 'peter_bynum@gmail.com',
    firstName: 'Peter',
    lastName: 'Bynum',
    age: 55,
    pets: [
      {
        type: 'DOG',
        name: 'Rocco'
      },

      {
        type: 'DOG',
        name: 'Rosey'
      }
    ]
  }).returning("*")
  console.log(peter)
  // -----
  cleanup()
}

run()
