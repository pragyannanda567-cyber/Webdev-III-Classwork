const express = require('express');
const router = express.Router();
const tourController = require('../Controller/tourController');

//Route to get all tours
router.get("/tours",tourController.getAllTours);

module.exports = router