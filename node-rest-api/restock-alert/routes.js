const router = require('express').Router();

const RestockAlertController = require('./controllers/RestockAlertController');

router.post("/addRestockAlert", RestockAlertController.addRestockAlert);

module.exports = router;