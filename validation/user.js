/**
 * Example Validation Rules
 */

 const { body } =require('express-validator');
 const models = require('../models');
 
 const createRules = [

         body('email').exists().isString().isEmail().custom(async value => {
             const email = await new models.User({email: value}).fetch({require: false});
             if(email){
                 return Promise.reject("Email alreadt exsist");
             }
             return Promise.resolve();
         }),

         body('password').exists().isLength({min: 4}),
         body('first_name').exists().isLength({min: 2}),
         body('last_name').exists().isLength({min: 2}),

        ]
     
 

 module.exports = {
     createRules,
 }
 