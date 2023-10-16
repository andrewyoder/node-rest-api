const { DataTypes } = require("sequelize");

const SignupModel = {
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
    initialise: (sequelize) => {
        this.model = sequelize.define("signup", SignupModel);
    },
    addSignup: (signup) => {
        return this.model.create(signup);
    },
    getSignups: () => {
        return this.model.findAll();
    }
};