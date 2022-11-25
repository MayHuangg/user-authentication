const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

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

// routing for index page 
app.get('/', (req, res) => {
  res.render('index')
})