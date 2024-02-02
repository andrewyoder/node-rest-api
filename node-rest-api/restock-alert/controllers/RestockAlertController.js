const { request, response } = require('express');
const RestockAlert = require('../../common/models/RestockAlertModel.js');

module.exports = {
    addRestockAlert: (request, response) => {
        console.log("restockAlert");
        /*const Schema = mongoose.Schema;*/
        //const alert = {
        //    product: request.query.product,
        //    email: request.query.email,
        //};
        const alert = new RestockAlert({
            product: request.query.product,
            email: request.query.email,
        });
        //const alert = new RestockAlert(request.query.product, request.query.email);
        console.log(alert);
        var saveStatus = await alert.save();
        //this.window.close();
        return response.status(200).json({
            status: saveStatus,
            //data: JSON.stringify(alert),
            message: "Your email has been added -- you may close this window."
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