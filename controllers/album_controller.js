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

 module.exports = {
     loadAlbums,
 }