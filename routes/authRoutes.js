const { Router } = require('express');
const router = Router();

const authMiddleware = require('../middleware/auth');
const homeController = require('../controllers/homepage');
const loginController = require('../controllers/login');
const signupController = require('../controllers/signup');
const profileController = require('../controllers/profile');
const logoutController = require('../controllers/logout');

// @GET http://localhost:4000/
router.get('/', authMiddleware, homeController);

// @GET http://localhost:4000/login
router.get('/login', authMiddleware, loginController.renderPage);

// @POST http://localhost:4000/api/login
router.post('/api/login', loginController.handleLogin);

// @GET http://localhost:4000/signup
router.get('/signup', authMiddleware, signupController.renderPage);

// @POST http://localhost:4000/api/signup
router.post('/api/signup', signupController.handleSignup);

// @GET http://localhost:4000/profile
router.get('/profile', authMiddleware, profileController);

router.get('/logout', logoutController);

module.exports = router;
