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

    getRestockAlerts: async (request, response) => {
        //console.log();
        console.log(request.body);
        //var product = formData.product;
        var productName = new FormData(request).product;
        //var productName = request.body.product;

        try {
            if (productName) {
                console.log("getAlerts: " + productName);
                var result = await RestockAlert.find({ product: productName, sent: false }).exec();
            }
            else {
                console.log("getAllUnsentAlerts");
                var result = await RestockAlert.find({sent: false }).exec();
            }
            response.status(200).json({
                success: true,
                data: result
            });
        } catch (err) {
            response.status(500).json({
                success: false
            });
        }
        return response;
    },

    updateRestockAlerts: async (request, response) => {
        var product = request.query.product;
        console.log("updateRestockAlerts: " + product);
        try {
            var result = await RestockAlert.updateMany({ product: product, sent: false }, { sent: true }).exec();
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

        //getAllUnsentAlerts: async (request, response) => {
    //    console.log("getAllUnsentAlerts");
    //    try {
    //        var result = await RestockAlert.find({ sent: false }).exec();
    //        response.status(200).json({
    //            success: true,
    //            data: JSON.stringify(result)
    //        });
    //    } catch (err) {
    //        response.status(500).json({
    //            success: false
    //        });
    //    }
    //    return response;
    //},
}