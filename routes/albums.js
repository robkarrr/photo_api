const express = require('express');
const router = express.Router();
const albumController = require('../controllers/album_controller');
const albumValidationRules = require('../validation/album');


// Get all albums
router.get('/', albumController.loadAlbums);

// Get a specific album
router.get('/:albumId', albumController.loadOneAlbum);

// Create an album
router.post('/', albumValidationRules.createRules, albumController.storeAlbum);
module.exports = router;


// Add photo to album
router.post('/:albumId/photos',albumValidationRules.storePhotoRules , albumController.storePhoto);

router.put('/:albumId', albumValidationRules.updateRules, albumController.updateAlbum);

module.exports = router;