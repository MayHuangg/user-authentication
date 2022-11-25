const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = Schema(
  {
    firstName: {
      type: String,
      require: true
    },
    email:{
      type: String,
      require: true
    },
    passworf: {
      type: String,
      require: true
    }
  }
)

module.exports = mongoose.model('user',userSchema)