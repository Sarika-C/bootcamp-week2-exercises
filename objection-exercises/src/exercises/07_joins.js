const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')
const Relation = require('../models/Relation')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  const allUsersAndPets = await User.query().withGraphFetched('pets')
  console.log(allUsersAndPets)

  // Get all users, their pets, AND their children
  const allUsersPetsChildren = await User.query().withGraphFetched('[pets, children]')
  console.log(allUsersPetsChildren)

  // Get all users, their parents, and their grandparents
  const allUsersParentsGrandparents = await User.query().withGraphFetched('[parents, parents.parents]')
  console.log(allUsersParentsGrandparents)
  
  // Get all users, their pets, their children, and their childrens' pets
  const allUsersPetsChildrenPets = await User.query().withGraphFetched('[pets, children, children.pets]')
  console.log(allUsersPetsChildrenPets)
  
  // -----
  cleanup()
}

run()
