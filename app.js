const express = require("express")
const app = express()

// 設置伺服器? 
let port = 3000
app.listen(port, () => {
  console.log(`listen on port: ${port}`)
})

// 連接資料庫 
require('./config/mongoose')