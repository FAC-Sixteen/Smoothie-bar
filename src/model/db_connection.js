const { Pool } = require("pg");
const url = require("url");
require("env2")("./config.env");

let connectionString = process.env.DATABASE_URL;

// module.exports = new Pool({ connectionString });

module.exports = new Pool({
  connectionString,
  max: 2,
  ssl: !connectionString.includes("localhost")
});
