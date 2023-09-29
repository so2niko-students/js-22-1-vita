const express = require('express')
const app = express()
const cors = require('cors');
const dayjs = require('dayjs');

app.use(cors());

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.get('/date', (req, res) => {
  const currentDate = dayjs().format('YYYY-MM-DD');
  res.send(currentDate);
})

app.get('/time', (req, res) => {
  const currentTime = dayjs().format('HH:mm:ss');
  res.send(currentTime);
})

app.get('/datetime', (req, res) => {
  const currentDateTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
  res.send(currentDateTime);
});

module.exports = app;