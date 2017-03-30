var mongoose = require('mongoose');

var openingTimeSchema = new mongoose.Schema({
	days : {
		type : String,
		required : true
	},
	opening : String,
	closing : String,
	closed : {
		type : Boolean,
		required : true
	}
});

var reviewSchema = new mongoose.Schema({
	author : String,
	rating : {
		type : Number,
		required : true,
		min : 0,
		max : 5
	},
	reviewText : String,
	createdOn : {
		type : Date,
		"default" : Date.now
	}
});

var locationSchema = new mongoose.Schema({
	name : {
		type : String,
		required : true
	},
	address : String,
	rating : {
		type : Number,
		"default" : 0,
		min : 0,
		max : 5
	},// The word default doesn’t have to be in quotes, but it’s a reserved
	// word in JavaScript so it’s a good idea to do so.
	facilities : [ String ],
	coords : {
		type : [ Number ],
		index : '2dsphare'
	},
	// To meet the Geo JSON specification, a coordinate pair must be entered
	// into
	// the array in the correct order: longitude then latitude.
	openingTimes : [ openingTimeSchema ],
	reviews : [ reviewSchema ]
});


mongoose.model('Location'/* Model Name */, 
				locationSchema/* Schema */,
				'Locations'/* Mongodb collection name, option, model name in lowecase is default*/);