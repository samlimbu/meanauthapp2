var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var categoryModel = require('../models/categoryfile');

router.get('/', function(request, response){
	mongoose.model('categories').find({}, function(err,data){
		if(err){
			throw err;
		}
		response.json(data);
	}).sort({id:1});//filter
});
module.exports = router;