const SignupModel = require('..\..\common\models\Signup.js');

module.exports = {
    addSignup: (req, res) => {

        SignupModel.createSignup({ id: userId })
            .then((user) => {
                return res.status(200).json({
                    status: true,
                    data: user.toJSON(),
                });
            })
            .catch((err) => {
                return res.status(500).json({
                    status: false,
                    error: err,
                });
            });
    }
}