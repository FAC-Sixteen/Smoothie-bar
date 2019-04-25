const db = require("../model/db_connection");
const getData = () => {
  return db.query("SELECT * FROM orders").then(response => {
    return response.rows;
  });
};

const getOrderHistory = name => {
  return db
    .query("SELECT * FROM orders WHERE name = $1", [name])
    .then(response => {
      return response.rows;
    });
};

module.exports = { getData, getOrderHistory };
