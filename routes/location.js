const express = require('express');
const router = express.Router();

const locationController = require('../controllers/locationController');

/* GET home page. */
router.get('/', locationController.getIndex);

/* GET location list page. */
router.get('/list', locationController.getLocationList);

/* GET location create page. */
router.get('/list/create', locationController.getLocationCreate);

/* Add location to DB. */
router.post('/list/create', locationController.postLocationCreate);

/* Get Update location to DB. */
router.get('/list/edit', locationController.getLocationEdit);

/* Post Update location to DB. */
router.post('/list/edit', locationController.postLocationEdit);

module.exports = router;