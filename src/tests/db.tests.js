const test = require("tape");

const app = require("../app");
const runDbBuild = require("../model/db_build");
const addOrder = require("../queries/addOrder");
const { getData, getOrderHistory } = require("../queries/getOrderInfo");

const testData = { name: "Albert", order: "Purple Rain" };

test("add order", t => {
  runDbBuild()
    .then(
      addOrder(testData.name, testData.order)
        .then(response => {
          t.equal(response[0].name, "Albert", "response.name should be Albert");
          t.equal(
            response[0]["smoothie_name"],
            "Purple Rain",
            "response.smoothie_name should be Purple Rain"
          );
          t.true(response[0].id, "there should be an id number");
          t.end();
        })
        .catch(error => t.error(error))
    )
    .catch(error => console.log(error));
});

test("get order data", t => {
  runDbBuild()
    .then(
      getData()
        .then(response => {
          t.true(response, "getData should return some data");
          t.end();
        })
        .catch(error => t.error(error))
    )
    .catch(error => console.log(error));
});

test("get order history", t => {
  runDbBuild()
    .then(
      getOrderHistory("Kate")
        .then(response => {
          t.true(response, "getOrderHistory should return some data");
          t.equals(response[0].name, "Kate", "should return Kate");
          t.equals(
            response[0]["smoothie_name"],
            "Purple Rain",
            "should return Purple Rain"
          );
          t.end();
        })
        .catch(error => t.error(error))
    )
    .catch(error => console.log(error));
});
