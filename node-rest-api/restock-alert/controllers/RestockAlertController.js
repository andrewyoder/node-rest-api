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
        //this.window.close();
        //response.status(200).body("Your email has been added. You may close this window.");
        response.status = 200;
        reponse.statusText = "Your email has been added. You may close this window.";
        return response;
        return response.status(200).json({
            status: true,
            body: "Your email has been added. You may close this window.",
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