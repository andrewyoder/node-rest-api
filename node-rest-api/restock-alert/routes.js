const router = require('express').Router();

const RestockAlertController = require('./controllers/RestockAlertController');

router.get("/add", RestockAlertController.addRestockAlert);
//router.get("/get", RestockAlertController.getAllUnsentAlerts);
router.get("/get", RestockAlertController.getRestockAlerts);
router.get("/update", RestockAlertController.updateRestockAlerts);

/* GET home page. */
router.get("/", function (req, res) {
	res.render("alerts", { title: "Get Emails" });
});

module.exports = router;