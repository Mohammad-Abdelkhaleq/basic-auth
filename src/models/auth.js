"use strict";

const auth=(Sequelize, DataTypes) => 
Sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});
;

module.exports = auth;