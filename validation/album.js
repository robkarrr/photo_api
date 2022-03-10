const { body } = require('express-validator');
 const models = require('../models');
 
 const createRules = [
     body('title').exists().isLength({ min: 3 }),
 ];

 module.exports ={
     createRules,
     
 }