// const express = require('express')
// const app = express()
// const cors = require('cors');

// app.use(cors());

// app.get('/hello', (req, res) => {
//   res.send('Hello World!')
// })

// module.exports = app;

// const express = require('express')
// const app = express()
// const cors = require('cors');

// const corsOptions = {
//   origin: 'http://example.com',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

// app.use(cors(corsOptions));

// app.get('/hello', (req, res) => {
//   res.send('Hello World!');
// });

// module.exports = app;

const express = require('express')
const app = express()
const cors = require('cors');

const corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/hello', cors(corsOptions),(req, res) => {
  res.send('Hello World!');
});

module.exports = app;


