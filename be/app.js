const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors());

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

module.exports = app;