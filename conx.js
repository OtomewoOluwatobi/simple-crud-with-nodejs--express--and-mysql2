const mysql = require('mysql2');

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "sys_dba",
  database: "blog_api_db",
  password: "MyP@$t0r",
});

module.exports = pool.promise();