const api_port_http = 80;
const api_port_https = 8000;

const StatusRoutes = require('./status/routes');
const RestockAlertRoutes = require('./restock-alert/routes');

const connection_string = "mongodb://127.0.0.1/my_database";

module.exports = {
    api_port_http,
    api_port_https,
    StatusRoutes,
    RestockAlertRoutes,
    connection_string
};