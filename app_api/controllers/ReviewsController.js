/**
 * http://usejsdoc.org/
 */
var helpers = require('../helpers/Helper')
var status = 200;
var content = {
	"msg" : "Review Testing APIs"
};

module.exports = {
	reviewReadOne : function(req, res) {
		res.status(status);
		res.json(content);
	},
	reviewUpdateOne : function(req, res) {
		res.status(status);
		res.json(content);
	},
	reviewDeleteOne : function(req, res) {
		res.status(status);
		res.json(content);
	},
	createReview : function(req, res) {
		res.status(status);
		res.json(content);
	}
};