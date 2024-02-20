import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

export const db = mysql.createConnection({
  port: 3306,
  host: "bk7ktz19n5gv57gdzljd-mysql.services.clever-cloud.com",
  user: "ubvs7yo0ehlxcovv",
  password: "sX78hEdcOTMSp9VsFXlG",
  database: "bk7ktz19n5gv57gdzljd",
});
