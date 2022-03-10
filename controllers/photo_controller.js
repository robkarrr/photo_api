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

 // Create new photo
 const storePhoto = async (req, res) => {
     
    const errors = validationResult(req);
    if(!errors.isEmpty){
        return res.status(422).send({status: "fail", data: errors.array});
    }


    const validData = matchedData(req);
    validData.user_id = req.user.id;


    try{
        const photo = await new models.Photo(validData).save();

        res.status(200).send({
            status: 'success',
            data: {
                photo
            }
        })
    }
    catch(error) {
        res.status(500).send({
            status: 'error',
            message: "Exception thrown in database when creating a new photo",
        })
        throw error;
    }
 }
 

 module.exports = {
    getPhotos,
    showPhoto,
    storePhoto,
    
 }