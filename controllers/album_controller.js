const debug = require('debug')('book:album_controller');
 const { matchedData, validationResult } = require('express-validator');
 const models = require('../models');

  

    // Load albums for user
 const loadAlbums = async (req, res) => {
    try {

		const user = await models.User.fetchById(req.user.id,{ withRelated: ['albums'] });
        

		res.send({
			status: 'success',
			data: user.related('albums'),
		});
	} catch (error) {
		res.status(404).send({
			status: 'error',
			data: 'Album(s) Not Found',
		});
		return;
	}

 }

 const loadOneAlbum = async (req, res) => {
        
    const album = await models.Album.fetchById(req.params.albumId, {withRelated: ['photos'], require: false});

    if (!album) {
        return res.status(404).send({
            status: 'fail',
            data: 'There is no such album'
        });
    }


    if (album.attributes.user_id !== req.user.id) {
        return res.status(403).send({
            status: 'fail',
            data: 'That is not your album!'
        });
    }

    res.status(200).send({
        status: 'success',
        data: album
    })

}

 module.exports = {
     loadAlbums,
     loadOneAlbum,
 }