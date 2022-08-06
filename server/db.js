const Pool = require("pg").Pool
require('dotenv').config()

const pool = new Pool({
  user: DB_USER,
  password: DB_PASSWORD,
  host: HOST,
  port: 5432,
  database: DATABASE
})