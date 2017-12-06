const express = require("express");
const app = express();
const errorCallback = console.error.bind(console);

app.use(express.static("client/build"));


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Express Server is running on " + port);
});