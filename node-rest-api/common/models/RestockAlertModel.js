const Sequelize = require("sequelize");
const sequelize = new Sequelize()

const RestockAlertModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    product: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    creationDate: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    alertSent: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        unique: false
    },
};

module.exports = {
    initialize: (sequelize) => {
        this.model = sequelize.define("RestockAlert", RestockAlertModel)
    },
    createAlert: (RestockAlert) => {
        return this.model.create(RestockAlert);
    },
    getAlerts: () => {
        return this.model.findAll();
    }
};