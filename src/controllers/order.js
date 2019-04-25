const postOrder = require("../queries/addOrder.js");
const getOrderInfo = require('../queries/getOrderInfo')

const order = (req, res) => {
  const { name, order } = req.body;
  postOrder(name, order)
  .then(response => {
   return res.render('receipt',response[0]);}
)};

const orderHistory = (req, res) => {
  const { name, order} = req.body;
  postOrder(name, order);
  getOrderInfo.getOrderHistory(name)
  .then(response => {
  console.log(response)
   return res.render('receipt',  {recentOrder: response[0], orders: response});}
)};


module.exports = {
  orderHistory
};
