const { request, response } = require('express');
const RestockAlert = require('../schemas/RestockAlertSchema.js');
const path = require('path');

module.exports = {

    addRestockAlert: (request, response) => {
        console.log("restockAlert");

        var lowerProd = request.query.product.toLowerCase();
        var lowerEmail = request.query.email.toLowerCase();

        const alert = new RestockAlert({
            product: lowerProd,
            email: lowerEmail
        });

        console.log(alert);

        try {
            alert.save();
            //response.status(200).json({
            //    success: true,
            //    //data: JSON.stringify(alert),
            //    message: "You're set -- you may close this window."
            //});
        } catch (err) {
            response.status(500).json({
                success: false,
                error: err
            });
        };
        return response.sendFile(path.join(__dirname, '../../resources/chewbacca.jpg'));
        //response.render('../../resources/chewbacca.jpg');
        //return response;
    },

    getRestockAlerts: async (request, response) => {

        console.log(request.body)
        var productName = (request.body.product).toLowerCase();

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
}