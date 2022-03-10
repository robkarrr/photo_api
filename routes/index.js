const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const userValidation = require('../validation/user');
const auth_controller = require('../controllers/auth_controller');

/* GET / */
router.get('/', (req, res, next) => {
	res.send({ success: true, data: { msg: 'oh, hi' }});
});



router.use('/photos', auth.basic, require('./photos'));

router.use('/albums', auth.basic, require('./albums'));

router.post('/register', userValidation.createRules, auth_controller.register);

module.exports = router;
