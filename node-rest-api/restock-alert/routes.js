const router = require('express').Router();

const RestockAlertController = require('./controllers/RestockAlertController');

router.get("/add", RestockAlertController.addRestockAlert);
router.post("/", RestockAlertController.getRestockAlerts);
router.get("/update", RestockAlertController.updateRestockAlerts);

module.exports = router;