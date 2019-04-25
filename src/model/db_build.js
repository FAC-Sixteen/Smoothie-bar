const dbConnection = require("./db_connection");

const sql = `
BEGIN;
DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  smoothie_name VARCHAR(50) NOT NULL
);

INSERT INTO orders (name, smoothie_name)
VALUES ('Kate', 'Purple Rain'),('Burhan','Mad Mango'),('Ryan','FAC Fruitie'),('Sam','Tutti Frutti');
COMMIT;
`;

const runDbBuild = () =>
  new Promise((resolve, reject) => {
    dbConnection.query(sql, (err, res) => {
      if (err) reject(err);
      console.log("database being built");
      resolve(true);
    });
  });

module.exports = runDbBuild;
