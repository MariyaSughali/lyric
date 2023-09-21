const {Pool} = require("pg");

const pool = new Pool({
  database: "lyricTrans_profileUpdate",
  host: "localhost",
  password: "131619",
  port: 5432,
  user: "postgres",
});

module.exports = pool;