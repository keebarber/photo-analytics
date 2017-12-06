const express = require("express");
const app = express();
const errorCallback = console.error.bind(console);

app.use(express.static("client/build"));

// app.get("https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=process.env.1382121603.5ba55fd.e9676234074b4ce8bf674c2ba19a8816)", function(data) {
// 	console.log(data);
// });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Express Server is running on " + port);
});