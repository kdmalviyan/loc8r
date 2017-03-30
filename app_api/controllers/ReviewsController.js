/**
 * http://usejsdoc.org/
 */
var helpers = require('../helpers/Helper.js')

module.exports = {
	reviewsCreate : function(req, res) {
		helpers.sendJsonResponse(res, 200, {"status" : "success"});
	},
	reviewsReadOne : function(req, res) {
		helpers.sendJsonResponse(res, 200, {"status" : "success"});
	},
	reviewsUpdateOne : function(req, res) {
		helpers.sendJsonResponse(res, 200, {"status" : "success"});
	},
	reviewsDeleteOne : function(req, res) {
		helpers.sendJsonResponse(res, 200, {"status" : "success"});
	}
};