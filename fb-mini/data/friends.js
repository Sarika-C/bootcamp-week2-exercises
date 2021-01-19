const casual = require('casual')
const userData = require('./users')

casual.define('friend', ({ user1ID, user2ID }) => ({
    id: casual.uuid,
    requesterID: user1ID,
    requesteeID: user2ID,
    date_requested: casual.date(),
    status: casual.random_element(['Accepted', 'Declined', 'Requested']),
    created_at: casual.moment,
    updated_at: casual.moment,
}))


const friendData = []

for (let i = 0; i < 20; ++i) {
  const user1ID = casual.random_element(userData).id
  const user2ID = casual.random_element(userData).id
  friendData.push(casual.friend({ user1ID, user2ID }))
}

module.exports = friendData
