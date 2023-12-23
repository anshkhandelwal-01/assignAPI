const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);
router.use('/api/auth', require('./authRoutes'));
router.use('/api/url', require('./urlRoutes'));

module.exports = router;