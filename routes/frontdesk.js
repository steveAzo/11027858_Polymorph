const express = require('express');
const router = express.Router();
const frontDeskController = require('../controllers/frontDeskController');

router.post('/register-patient', frontDeskController.registerPatient);

module.exports = router;
