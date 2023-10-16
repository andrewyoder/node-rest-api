const router = require('express').Router();

const StatusController = require('./controllers/StatusController');

router.get("/", StatusController.getStatus);

module.exports = router;