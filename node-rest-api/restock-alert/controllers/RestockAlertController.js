const { request, response } = require('express');
const RestockAlert = require('../../common/models/RestockAlertModel.js');

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
                status: true,
                //data: JSON.stringify(alert),
                message: "Your email has been added -- you may close this window."
            });
        } catch (err) {
            response.status(500).json({
                status: false,
                error: err
            });
        };
        return response;
    }
}