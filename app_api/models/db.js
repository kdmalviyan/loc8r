var mongoose = require('mongoose');
require('./locations')

// Db URL example "mongodb://username:password@localhost:27027/database"
// username, password, port are optional
var dbURL = 'mongodb://localhost/Loc8r';
if (process.env.NODE_ENV === 'production') {
	dbURL = 'mongodb://kdmalviyan:kds2017@ds147070.mlab.com:47070/loc8r';
}
mongoose.connect(dbURL);

mongoose.connection.on('connected', function() {
	console.log('Mongoose connected to ' + dbURL);
});
mongoose.connection.on('error', function(err) {
	console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function() {
	console.log('Mongoose disconnected from ' + dbURL);
});

var connectionShutdown = function(msg, callback) {
	mongoose.connection.close(function() {
		console.log('Mongoose connection closed through ' + msg);
		callback();
	});
};

// For nodemon restart
process.once('SIGUSR2', function() {
	connectionShutdown('nodemon restart', function() {
		process.kill(process.pid, 'SIGUSR2');
	});
});

// Application termination
process.on('SIGINT', function() {
	connectionShutdown('app termination', function() {
		process.exit(0);
	});
});

// For Heroku
process.on('SIGTERM', function() {
	connectionShutdown('Heroku app shutdown', function() {
		process.exit(0);
	});
});

// If multiple connections are needed, use createConnection method of mongoose.
// i.g
/*
 * var dbURIlog = 'mongodb://localhost/Loc8rLog';
 * 
 * var logDB = mongoose.createConnection(dbURIlog);
 * 
 * logDB.on('connected', function() { console.log('Mongoose connected to ' +
 * dbURIlog); });
 * 
 * logDB.close(function() { console.log('Mongoose log disconnected'); });
 */