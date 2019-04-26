const getOrderInfo = require("../queries/getOrderInfo");

const orderHistory = (req, res) => {
  const { name, order } = req.body;
  getOrderInfo.getOrderHistory(name).then(response => {
    console.log(response);
    return res.render("orderhistory", { orders: response });
  });
};

module.exports = orderHistory;
