const Pool = require("pg").Pool;

const pool = new Pool({
	user: "postgres",
	password: "2outkast",
	host: "localhost",
	port: 5432,
	database: "scandiweb"
});

module.exports = pool;