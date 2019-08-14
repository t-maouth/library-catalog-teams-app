'use strict';

var a = require("./LibraryCatalog.js");
var lc = new a();

module.exports.setup = function(app) {
    var path = require('path');
    var express = require('express')
    var bodyParser = require('body-parser');
    

    // Configure the view engine, views folder and the statics path
    app.use(express.static(path.join(__dirname, 'static')));
    app.set('view engine', 'pug');
    app.set('views', path.join(__dirname, 'views'));
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    

    // Setup home page
    app.get('/', function(req, res) {
        res.render('hello');
    });

    

    // Setup the static tab
    app.get('/hello', function(req, res) {
        res.render('hello');
    });

    

    // Setup the configure tab, with first and second as content tabs
    app.get('/configure', function(req, res) {
        res.render('configure');
    });    



    app.get('/first', function(req, res) {
        res.render('first');
    });


    app.post('/second', function(req, res) {
        console.log(req.body.search)
        res.render('second', {search: req.body.search, db: lc});
    });    

    app.get('/recent', function(req, res) {
        res.render('recent', {recents: lc.recents});
    });

    app.get('/books/:bookTitle', function(req, res) {
        console.log(req.params)
        res.render('books', {db: lc, title: req.params})
    })

    app.get('/discussions/:bookTitle', function(req, res) {
        res.render('discussions', {db: lc, title: req.params})
    })



};
