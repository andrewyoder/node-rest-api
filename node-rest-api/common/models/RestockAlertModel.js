const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestockAlertSchema = new Schema({
    product: String,
    email: String,
    date: { type: Date, default: Date.now },
    sent: { type: Boolean, default: false }
});

RestockAlertSchema.virtual("url").get(function () {
    return `/addRestockAlert/${this._id}`;
});

module.exports = mongoose.model('RestockAlert', RestockAlertSchema);