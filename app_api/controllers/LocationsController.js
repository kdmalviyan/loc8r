/**
 * http://usejsdoc.org/
 */
var helpers = require('../helpers/Helper')
var status = 200;
var content = {
	"msg" : "Location Controller Testing APIs"
};
module.exports = {
	locationsListByDistance : function(req, res) {
		res.status(status);
		res.json(content);
	},
	locationsCreate : function(req, res) {
		res.status(status);
		res.json(content);
	},
	locationsReadOnex : function(req, res) {
		res.status(status);
		res.json(content);
	},
	locationsReadOne : function(req, res) {
		res.status(status);
		res.json(content);
	},
	locationsUpdateOne : function(req, res) {
		res.status(status);
		res.json(content);
	},
	locationsDeleteOne : function(req, res) {
		res.status(status);
		res.json(content);
	}
};