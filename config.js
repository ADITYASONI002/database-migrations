const dotenv = require("dotenv");
dotenv.config();
let db_name = process.env.DB_NAME || "BlogSphere";
let db_user = process.env.DB_USERNAME || "root";
let db_pass = process.env.DB_PASSWORD || "root";
let host= process.env.DB_HOST || "localhost";
let dialect= process.env.DB_DIALECT || "mysql";
let port= process.env.DB_PORT || 3306;
process.env.NODE_ENV="default"

module.exports = {
  default: {
    username: db_user,
    password: db_pass,
    database: db_name,
    host: host,
    port: port,
    dialect: dialect,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
}