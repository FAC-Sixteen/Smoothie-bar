const postOrder = require("../queries/addOrder.js");

const order = (req, res) => {
  const { name, order } = req.body;
  console.log(name, order);
  postOrder(name, order).then(response => res.send(response));
};

module.exports = order;
