'use strict'

const express = require('express')

const middleware = require('./middleware')
const routes = require('./routes')

// var cors = require('cors')

const app = express()

// Middleware Configuration



app.use(middleware.bodyParser);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use('/', require('./routes/auth'))
app.use('/cart', require('./routes/cart'))
app.use('/inventory', require('./routes/inventory'))
app.use('/review', require('./routes/review'))

module.exports = app


