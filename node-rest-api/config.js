const api_port = process.env.PORT || 443;

const StatusRoutes = require('./status/routes');
const RestockAlertRoutes = require('./restock-alert/routes');

module.exports = {
    api_port,
    StatusRoutes,
    RestockAlertRoutes
};