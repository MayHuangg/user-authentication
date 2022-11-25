const dotenv = require('dotenv')
dotenv.config()
const db = require("../config/mongoose")
const data = require("../users.json")
const User = require("./user")

db.once('open',() => {
  users = data.users
  for(let i = 0; i < data.users.length; i++) {
    User.create({
      firstName: users[i].firstName,
      email: users[i].email,
      password: users[i].password
    })
  }
})