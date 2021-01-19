const casual = require('casual')

casual.define('user', () => ({
  id: casual.uuid,
  first_name: casual.first_name,
  last_name: casual.last_name,
  birthday: casual.date(),
  email: casual.email,
  bio: casual.description,
  password: casual.password,
  created_at: casual.moment,
  updated_at: casual.moment,
}))


const userData = []

for (let i = 0; i < 20; ++i) {
  userData.push(casual.user)
}

module.exports = userData
