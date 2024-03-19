const express = require('express')
const app = express()

app.get('/abaout', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)