const { request, response } = require('express');
const RestockAlertModel = require('../../common/models/RestockAlertModel.js');

module.exports = {
    addRestockAlert: (request, response) => {
        const Schema = mon
        const alert = {
            product: request.body.product,
            email: request.body.email,
        };

        return response.status(200).json({
            status: true,
            data: JSON.stringify(alert),
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