const router = require('express').Router();

const SignupController = require('./controllers/SignupController');

const NewSignupPayload = require('./schemas/NewSignupPayload');

router.post("/addRestockAlert", SignupController.addRestockAlert);

module.exports = router;