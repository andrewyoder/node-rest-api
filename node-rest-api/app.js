const express = require('express');
const config = require('./config');
const cors = require('cors');
const Sequelize = require('sequelize');

const app = express();
app.use(express.json());
//app.use(cors());

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
    next();
});

const sequelize = new Sequelize({
    dialect: "sqlite",
    //storage: "./TBD.db"
});

const RestockAlertModel = require('./common/models/RestockAlertModel');

RestockAlertModel.initialize(sequelize);

sequelize
    .sync()
    .then(() => {
        app.use("/status", config.StatusRoutes);
        app.use("/restockAlert", config.RestockAlertRoutes);

        app.listen(config.api_port, () => {
            console.log("Server Listening on PORT: ", config.api_port);
        });
    });

// Use PM2 - "npm install pm2" and "pm2 start app.js" to run as a background process