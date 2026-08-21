const express = require('express');
const router = express.Router();
const tourController = require('../Controller/tourController');
router.get('/tours', tourController.getAllTours);
router.get('/tours/:id', tourController.getTourById);
router.get("/tours/search",tourController.getToursByQuery);

router.post('/tours/',tourController.saveTours);
/* router.put('/tours/',tourController.updateTour)*/
module.exports = router;
