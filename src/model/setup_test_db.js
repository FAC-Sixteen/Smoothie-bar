const { exec } = require("child_process");
const runDbBuild = require("./db_build");

console.log(runDbBuild);

console.log("Creating test database...");

exec(
  `psql <<EOF
\\x
CREATE DATABASE smoothietest;
CREATE USER smoothietester WITH SUPERUSER PASSWORD 'test';
ALTER DATABASE smoothietest OWNER TO smoothietester;
EOF`,
  error => {
    if (error) {
      console.log(error);
    } else {
      console.log("Created database smoothietest");
    }
    runDbBuild
      .then(() => {
        console.log("Successfully populated test database");
        process.exit(0); //wtf am i
      })
      .catch(console.log(error));
  }
);
