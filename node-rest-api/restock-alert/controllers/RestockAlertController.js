const { request, response } = require('express');
const RestockAlert = require('../schemas/RestockAlertSchema.js');
//const mongoose = require('mongoose');
//mongoose.set('useFindAndModify', false);

module.exports = {

    addRestockAlert: (request, response) => {
        console.log("restockAlert");

        const alert = new RestockAlert({
            product: request.query.product,
            email: request.query.email,
        });

        //const alert = new RestockAlert({
        //    product: request.body.product,
        //    email: request.body.email,
        //});

        console.log(alert);

        try {
            alert.save();
            response.status(200).json({
                success: true,
                //data: JSON.stringify(alert),
                message: "You're set -- you may close this window."
            });
        } catch (err) {
            response.status(500).json({
                success: false,
                error: err
            });
        };
        return response;
    },




    getRestockAlerts: async(request, response) => {
        try {
            var result = await RestockAlert.find({ sent: false }).exec();
            response.status(200).json({
                success: true,
                data: JSON.stringify(result)
            });
        } catch (err) {
            response.status(500).json({
                success: false
            });
        }
        return response;
    }
}