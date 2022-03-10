const express = require('express');
const router = express.Router();
const photoController = require('../controllers/photo_controller');
const photoValidationRules = require('../validation/photo');


router.get('/', photoController.getPhotos);
// Get a specific photo
router.get('/:photoId', photoController.showPhoto);
router.post('/', photoValidationRules.createRules ,photoController.storePhoto);

module.exports = router;