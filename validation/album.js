const { body } = require('express-validator');
 const models = require('../models');
 
 const createRules = [
     body('title').exists().isLength({ min: 3 }),
 ];

 const storePhotoRules = [
    body('photo_id').exists().isInt().custom(
        
        async value => {
            const photo = await new models.Photo({ id: value }).fetch({ require: false});

            if (!photo) {
                // Reject if no photo was found
                return Promise.reject('There is no photo with that id');
            }

            // Otherwise resolve
            return Promise.resolve();
        }
    )
];


 module.exports ={
    createRules,
    storePhotoRules
 }