const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const userController = require('../controllers/user/userController');

router.post('/create-account',auth, userController.registerUser);
router.post('/login',  userController.authenticateUser);
//,
module.exports = router;
