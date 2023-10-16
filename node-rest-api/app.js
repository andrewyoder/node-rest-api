const express = require('express');
const config = require('./config');

const app = express();
app.use(express.json());

app.use("/status", config.StatusRoutes);
app.use("/restockAlert", config.SignupRoutes);

app.listen(config.api_port, () => {
    console.log("Server Listening on PORT:", config.api_port);
});