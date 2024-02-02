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
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
    next();
});

app.use("/status", config.StatusRoutes);
app.use("/addRestockAlert", config.RestockAlertRoutes);

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = "mongodb://127.0.0.1/my_database";

const RestockAlertModel = require('./common/models/RestockAlertModel');

main().catch((err) => console.log(err));
async function main() {
    console.log("awaiting on mongoose");
    await mongoose.connect(mongoDB);
    //app.listen(config.api_port);
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

//const Sequelize = require('sequelize');
//const sequelize = new Sequelize({
//    dialect: "sqlite",
//    //storage: "./TBD.db"
//});


//RestockAlertModel.initialize(sequelize);

//sequelize
//    .sync()
//    .then(() => {
//        app.use("/status", config.StatusRoutes);
//        app.use("/restockAlert", config.RestockAlertRoutes);

//        https
//            .createServer(app)
//            .listen(config.api_port, () => {
//                console.log("Server Listening on PORT: ", config.api_port);
//            });
//    });

// Use PM2 - "npm install pm2" and "pm2 start app.js" to run as a background process