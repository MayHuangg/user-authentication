const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const User = require('./models/user')

// 設置伺服器? 
let port = 3000
app.listen(port, () => {
  console.log(`listen on port: ${port}`)
})

// 連接資料庫 
require('./config/mongoose')

// 加入templete engine 
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')

// 使靜態檔案得以使用 
app.use(express.static('public'))

// 使client傳過來的資料得以被接到 
app.use(bodyParser.urlencoded({ extended: true }))

// routing for index page 
app.get('/', (req, res) => {
  res.render('index')
})

// routing for authentication 
app.post('/', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  let massage = ''
  User.find({ email,password })
    .lean()
    .then(data => {
      if (!data[0]){
        massage = 'Email或Password錯誤'
        res.render('index',{ massage })
      } else {
        const firstName = data[0].firstName
        res.render('welcome',{ firstName })
      }
    })
})