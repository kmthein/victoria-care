import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

export const db = mysql.createPool({
    host: process.env.MYSQL_ADDON_HOST, 
    user: process.env.MYSQL_ADDON_USER, 
    password: process.env.MYSQL_ADDON_PASSWORD,
    database: process.env.MYSQL_ADDON_DB,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})