const express = require('express');
const config = require('./config');
const cors = require('cors');
const Sequelize = require('seuelize');

const app = express();
app.use(express.json());
app.use(cors());

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