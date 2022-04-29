import { Sequelize } from "sequelize-typescript";
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config.js`)[env];

import { Message } from "./Message";

const sequelize = new Sequelize({
    dialect: config.dialect,
    host: config.host,
    username: config.username,
    password: config.password,
    database: config.database,
    logging: false,
    models: [Message],
});


const db: { [key: string]: any } = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default <any>db;