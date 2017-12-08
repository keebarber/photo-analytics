const express = require("express");
const app = express();
const errorCallback = console.error.bind(console);
require("dotenv").config();

app.use(express.static("client/build"));

// app.get("https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=" + process.env.ACCESSTOKEN, 
//    function(data) {
// 		console.log(data);
// });


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Express Server is running on " + port);
});