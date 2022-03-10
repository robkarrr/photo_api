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

 // Load one album from user

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


// Add album to user

const storeAlbum = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).send({ status: 'fail', data: errors.array() });
    }


    const validData = matchedData(req);
    validData.user_id = req.user.id;
    try {
        const album = await new models.Album(validData).save();
        debug("Created new example successfully: %O", album);

        res.send({
            status: 'success',
            data:{
               "title": validData.title,
               "user_id": validData.user_id,
               "id": album.id

            }
            });

    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: 'Exception thrown in database when creating a new album.',
        });
        throw error;
    }
}

const storePhoto = async (req, res) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({
            status: 'fail',
            data: errors.array()
        });
    }

    const validData = matchedData(req);

    const photo = await models.Photo.fetchById(validData.photo_id, {require: false})
    try {
        // Get the requested album and it's photos
        const album = await models.Album.fetchById(req.params.albumId, {withRelated: ['photos'], require: false});

        // If the album was not found, return and inform the user
        if (!album) {
            return res.status(404).send({
                status: 'fail',
                message: 'No such album exists'
            })
        }


        if(photo.attributes.user_id !== album.attributes.user_id) {
            return res.status(403).send({
                status: 'fail',
                data: "This isn't your photo"
            })
        }


        if(album.attributes.user_id !== req.user.id) {
            return res.status(403).send({
                status: 'fail',
                data: "This isn't your album"
            })
        }
      
        await album.photos().attach(validData.photo_id);


        res.status(200).send({
            status: 'succes',
            data: null
        });

    } catch (error) {
        
        res.status(500).send({
			status: 'error',
			message: 'Database error when adding the photo',
		});
		throw error;
    }

}

 module.exports = {
    loadAlbums,
    loadOneAlbum,
    storeAlbum,
    storePhoto,
 }