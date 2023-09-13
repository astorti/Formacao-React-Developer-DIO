const Pool = require('pg').Pool

const pool = new Pool({
    user: "postgres",
    password: "DATABASE_PASSWORD",
    host: "localhost",
    port: 5432,
    database: "post"
})

module.exports = pool;