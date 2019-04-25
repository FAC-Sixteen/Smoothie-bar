const postOrder = require("../queries/addOrder.js");

const order = (req, res) => {
  const { name, order } = req.body;
  console.log(name, order);
  postOrder(name, order).then(response => {
console.log(response[0])
   return res.render('receipt',response[0]);}
)};

module.exports = order;
