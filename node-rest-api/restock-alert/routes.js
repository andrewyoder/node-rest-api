const router = require('express').Router();

const RestockAlertController = require('./controllers/RestockAlertController');

router.post("/", RestockAlertController.addRestockAlert);

module.exports = router;