const express = require('express');
const router = express.Router();
const tempCtrl = require('../../controllers/temps');

router.get('/', tempCtrl.getTemps)

module.exports = router;