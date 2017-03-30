/**
 * http://usejsdoc.org/
 */
var helpers = require('../helpers/Helper.js')
module.exports = {
	locationsListByDistance : function(req, res) {
		helpers.sendJsonResponse(res, 200, {"status" : "success"});
	},
	locationsCreate : function(req, res) {
		helpers.sendJsonResponse(res, 200, {"status" : "success"});
	},
	locationsReadOne : function(req, res) {
		helpers.sendJsonResponse(res, 200, {"status" : "success"});
	},
	locationsUpdateOne : function(req, res) {
		helpers.sendJsonResponse(res, 200, {"status" : "success"});
	},
	locationsDeleteOne : function(req, res) {
		helpers.sendJsonResponse(res, 200, {"status" : "success"});
	}
};