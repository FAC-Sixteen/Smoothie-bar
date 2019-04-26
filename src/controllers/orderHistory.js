const getOrderInfo = require("../queries/getOrderInfo");

const orderHistory = (req, res) => {
  const customerName = req.params.customerName;
  getOrderInfo.getOrderHistory(customerName).then(response => {
    return res.render("orderhistory", { orders: response, name: customerName });
  });
};

module.exports = orderHistory;
