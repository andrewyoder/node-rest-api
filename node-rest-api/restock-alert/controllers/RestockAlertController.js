const { request, response } = require('express');
const RestockAlert = require('../schemas/RestockAlertSchema.js');
//const formidable = require('formidable');

//const mongoose = require('mongoose');
//mongoose.set('useFindAndModify', false);

module.exports = {

    addRestockAlert: (request, response) => {
        console.log("restockAlert");

        const alert = new RestockAlert({
            product: (request.query.product).toLowerCase(),
            email: (request.query.email).toLowerCase()
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
        //const form = formidable({ multiples: true });
        //form.parse(req, (err, fields, files) => {
        //    var body = fields;
        //});

        console.log(request.body)
        var productName = (request.body.product).toLowerCase();
        //var productName = request.body.product;

        if (productName) {
            console.log("getAlerts: " + productName);
            var result = await RestockAlert.find({ product: productName, sent: false }).exec();
        }
        else {
            console.log("getAllUnsentAlerts");
            var result = await RestockAlert.find({sent: false }).exec();
        }

        var emailList = new Array();
        var productList = new Array();
        result.forEach((entry) => {
            emailList.push(entry.email);
            productList.push(entry.product);
        });
        return response.status(200).json({
            success: true,
            product: productName,
            emails: emailList,
            products: productList
        });;
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