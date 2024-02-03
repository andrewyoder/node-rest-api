const router = require('express').Router();

const RestockAlertController = require('./controllers/RestockAlertController');

router.get("/add", RestockAlertController.addRestockAlert);
router.get("/get", RestockAlertController.getRestockAlerts)

module.exports = router;