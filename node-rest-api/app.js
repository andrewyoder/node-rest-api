const express = require('express');
const https = require('https');
const http = require('http');
const cors = require('cors');
const config = require('./config');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(cors());

const httpsOptions = {
    key: fs.readFileSync('/home/ec2-user/certs/client-key.pem'),
    cert: fs.readFileSync('/home/ec2-user/certs/client-cert.pem')
};

// Add Access Control Allow Origin headers
app.use((request, response, next) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    response.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
    next();
});

app.use("/status", config.StatusRoutes);
app.use("/restockAlert", config.RestockAlertRoutes);

// set view engine as html/ejs and use views/ directory
app.set('views', 'views/');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use("/", express.Router().get("/", (req, res) => {
    res.render('alerts', { title: "Get Emails" });
}));


const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

main().catch((err) => console.log(err));
async function main() {
    console.log("awaiting on mongoose");
    await mongoose.connect(config.connection_string);
    https
        .createServer(httpsOptions, app)
        .listen(config.api_port_https, () => {
            console.log("Listening on HTTPS port: ", config.api_port_https);
        });
    http
        .createServer(app)
        .listen(config.api_port_http, () => {
            console.log("Listening on HTTP port: ", config.api_port_http);
        });
}

// Use PM2 - "npm install pm2" and "pm2 start app.js" to run as a background process