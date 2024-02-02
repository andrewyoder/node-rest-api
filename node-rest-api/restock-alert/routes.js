const router = require('express').Router();

const RestockAlertController = require('./controllers/RestockAlertController');

router.get("/", RestockAlertController.addRestockAlert);

module.exports = router;