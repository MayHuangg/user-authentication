const dotenv = require('dotenv')
dotenv.config()
const db = require('../config/mongoose')
const data = require('../users.json')
const User = require('./user')

db.once('open', () => {
  const users = data.users
  User.insertMany(users)
})
