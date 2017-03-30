/**
 * http://usejsdoc.org/
 */
var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/LocationsController');
var ctrlreviews = require('../controllers/ReviewsController');

// locations
router.get('/locations', ctrlLocations.locationsListByDistance);
router.post('/locations', ctrlLocations.locationsCreate);
router.get('/locations/:locationid', ctrlLocations.locationsReadOne);
router.put('/locations/:locationid', ctrlLocations.locationsUpdateOne);
router.delete('/locations/:locationid', ctrlLocations.locationsDeleteOne);


// reviews
router.post('/locations/:locationid/reviews', ctrlreviews.reviewsCreate);
router.get('/locations/:locationid/reviews/:reviewid', ctrlreviews.reviewsReadOne);
router.put('/locations/:locationid/reviews/:reviewid', ctrlreviews.reviewsUpdateOne);
router.delete('/locations/:locationid/reviews/:reviewid', ctrlreviews.reviewsDeleteOne);
module.exports = router;