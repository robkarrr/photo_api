
// Authentication controllers'

const bcrypt = require('bcrypt');
const {matchedData, validationResult} = require('express-validator');
const models = require('../models');
const debug = require('debug')('books:auth_controller');




// Regsiter a new user

const register = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty){
        return res.status(442).send({status: "fail", data: errors.array()});
    }


    const validData = matchedData(req);
    debug(validData);

    try{
        validData.password = await bcrypt.hash(validData.password, 10);


    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: "Exception thrown when hashing password",
        })
        throw error;
    }

    try{

        const user = await new models.User(validData).save();



        res.send({
            status: "success",
            data:{
                email: validData.email,
                first_name: validData.first_name,
                last_name: validData.last_name,
            }
        });
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: "Exception thrown when creating user"
        })
        throw error;
    }

}

module.exports = {
    register
}


