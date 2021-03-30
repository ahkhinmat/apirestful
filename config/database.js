const { createPool } = require("mysql");
const pool=createPool({
    // host: process.env.DB_HOST,
    // port: process.env.DB_PORT,
    // user: process.env.DB_USER,
    // password: process.env.MYSQL_PASSWORD,
    // database: process.env.MYSQL_DB,
    // connectionLimit: 10
    host: "localhost",
    user: "root",
    password: "Tmk@541981",
    database: "test"
    
});
module.exports=pool;

// APP_PORT=3000
// DB_PORT=3306
// DB_HOST=localhost
// DB_USER=root
// MYSQL_PASSWORD=Tmk@541981
// MYSQL_DB:test