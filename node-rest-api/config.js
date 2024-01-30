const api_port_http = 80;
const api_port_https = 443;

const StatusRoutes = require('./status/routes');
const RestockAlertRoutes = require('./restock-alert/routes');

module.exports = {
    api_port_http,
    api_port_https,
    StatusRoutes,
    RestockAlertRoutes
};