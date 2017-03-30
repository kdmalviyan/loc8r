/**
 * http://usejsdoc.org/
 */

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
	return res;
};