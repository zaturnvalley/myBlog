//Requirements
var express = require('express');
var request = require('request');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');


//Global Variables
var app = express();
var db = require('./models');

//Settings & Use Statements
app.set('view engine', 'ejs');
app.use(exppress.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({extended: false}));