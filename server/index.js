require('newrelic');
require('dotenv').config();
const express = require('express');
const parser = require('body-parser');
const path = require('path');

require('../mongodb/config');
const cors = require('cors');


const { router } = require('./router');

const app = express();
const port = process.env.db_port || 3002;

app.use(cors());

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../static')));
app.use('/api', router)

app.listen(port, () => {
  console.log('listening to port ', port);
})