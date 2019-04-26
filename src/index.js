const app = require("./app");

app.listen(app.get("port"), () => {
  console.log("Magic on port", app.get("port"));
});
