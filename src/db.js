const { Pool } = require("pg")

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "test_db",
  password: "B3CK31ND",
  port: 5433,
}); 
module.exports = pool;