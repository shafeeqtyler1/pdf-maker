const express = require('express');
const router = express.Router();
const PdfController = require('../App/Controllers/PdfController');

router.get('/make-pdf', PdfController.makePdf);

module.exports = router;
