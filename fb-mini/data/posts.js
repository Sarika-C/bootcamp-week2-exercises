const casual = require('casual')
const userData = require('./users')

casual.define('post', ({ userID }) => ({
    id: casual.uuid,
    userID: userID,
    text: casual.text,
    date_posted: casual.date(),
    likes: casual.integer(from = 0),
    created_at: casual.moment,
    updated_at: casual.moment,
}))


const postData = []

for (let i = 0; i < 20; ++i) {
  const userID = casual.random_element(userData).id
  postData.push(casual.post({ userID }))
}

module.exports = postData
