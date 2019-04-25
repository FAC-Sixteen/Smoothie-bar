const db = require("../model/db_connection");
const postOrder = (name, drinkType) => {
  return db
    .query(
      "INSERT INTO orders (name, smoothie_name) VALUES ($1, $2) RETURNING id, name, smoothie_name",
      [name, drinkType]
    )
    .then(response => {
      return response.rows;
    });
};

module.exports = postOrder;
