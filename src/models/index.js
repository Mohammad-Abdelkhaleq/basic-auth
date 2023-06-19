require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const usersSchema = require('./auth.js');

const POSTGRES_URI = process.env.NODE_ENV === "test" ? "sqlite:memory:" : process.env.DATABASE_URL;

let sequelizeOptions = process.env.NODE_ENV === "production" ?
    {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    } :
    {}

const sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions); 

const UsersTable = usersSchema(sequelize, DataTypes);  

module.exports = {
    db: sequelize,
    usersModel: UsersTable,
};