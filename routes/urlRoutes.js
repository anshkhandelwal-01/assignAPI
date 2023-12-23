const express = require('express');
const urlController = require('../controllers/urlController');
const router = express.Router();

router.get('/edit/:id', urlController.edit);
router.post('/shorten/:id', urlController.shortenUrl);

module.exports = router;
