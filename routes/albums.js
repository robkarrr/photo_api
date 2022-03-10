const express = require('express');
const router = express.Router();
const albumController = require('../controllers/album_controller');
const albumValidationRules = require('../validation/album');


// Get all albums
router.get('/', albumController.loadAlbums);

// Get a specific album
router.get('/:albumId', albumController.loadOneAlbum);


module.exports = router;
