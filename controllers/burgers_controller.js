var express = require('express');
var router = express.Router();
var burger = require('../models/burgers.js');

router.get('/', function(req, res) {
    res.redirect('/index');
});

router.get('/index', function (req, res) {
	burger.selectAll(function(data) {
		var burgerObject = {burger: data };
		res.render('index', burgerObject);
	});
});

router.post('/burger/create', function(req, res) {
	burger.insertOne(req.body.burger_name, function() {
		res.redirect('/index');
	});
});

router.post('/burger/eat/:id', function (req, res) {
	burger.updateOne(req.params.id, function() {
		res.redirect('/index');
	});
});

module.exports = router;
