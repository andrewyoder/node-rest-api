const { request, response } = require('express');
const RestockAlertModel = require('../../common/models/RestockAlertModel.js');

module.exports = {
    addRestockAlert: (request, response) => {
        const alert = {
            product: request.body.product,
            email: request.body.email,
            date: new Date(),
            alertSent: false
        };

        return response.status(200).json({
            status: true,
            data: alert.toJSON(),
        });

        //return RestockAlertModel.createAlert(alert)
        //    .then((alert) => {
        //        return response.status(200).json({
        //            status: true,
        //            data: alert.toJSON(),
        //        });
        //    })
        //    .catch((err) => {
        //        return response.status(500).json({
        //            status: false,
        //            error: err,
        //        });
        //    });
    }
}