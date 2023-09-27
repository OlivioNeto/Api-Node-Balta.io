'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// conecta ao banco de dados
mongoose.connect('mongodb://localhost:27017');

// carrega as models
const Product = require('./models/product');

// Carrega as rotas 
const indexRoute = require('./routes/indexRoute');
const productRoute = require('./routes/productRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app; 