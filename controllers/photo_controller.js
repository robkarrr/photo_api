const debug = require('debug')('books:example_controller');
 const { matchedData, validationResult } = require('express-validator');
 const models = require('../models');
 const { User } = require('../models');
 

 // get all photos from user
 const getPhotos = async (req, res) => {
    const user = await models.User.fetchById(req.user.id , {withRelated: ['photos']});
    

     res.send({
         status: 'success',
         data: user.related('photos'),
     });
 }

 const showPhoto = async (req, res) => {
    const photo = await models.Photo.fetchById(req.params.photoId, {require: false});

    if(!photo){
        return res.status(404).send({
            status: 'fail',
            data: "Photo doees not exist",
        })
    }


    if(photo.attributes.user_id !== req.user.id){
        return res.status(403).send({
            status: 'fail',
            data: "This isn't your photo"
        })
    }

    res.status(200).send({
        status: 'success',
        data: photo
    })
 }
 

 module.exports = {
    getPhotos,
    showPhoto,
    
 }