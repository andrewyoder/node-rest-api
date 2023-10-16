const api_port = process.env.PORT || 3000

const StatusRoutes = require('./status/routes');
const SignupRoutes = require('./signup/routes');

module.exports = {
    api_port,
    StatusRoutes,
    SignupRoutes
};