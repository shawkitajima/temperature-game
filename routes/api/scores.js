const express = require('express');
const router = express.Router();
const scoreCtrl = require('../../controllers/scores');

router.get('/', scoreCtrl.getScores);
router.post('/set', scoreCtrl.setScore);
router.post('/', scoreCtrl.addScore);

module.exports = router;