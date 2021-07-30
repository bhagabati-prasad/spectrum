const { Router } = require('express');
const router = Router();

// require controllers
const loginController = require('../controllers/loginController');
const signupController = require('../controllers/signupController');
const updateUserController = require('../controllers/updateUserController');
const getUserController = require('../controllers/getUserController');
const contactController = require('../controllers/contactController');

// routes
router.post('/login', loginController);

router.post('/signup', signupController);

router.patch('/user/update', updateUserController);

router.post('/getuser', getUserController);

router.post('/contact', contactController);

module.exports = router;
