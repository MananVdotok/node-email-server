const express = require("express");
const sendMsg = require("./controller/sendMail");
const process = require("process");
const cors = require("cors");

const app = express();
const port = 7070;
app.use(express.json());
app.use(cors());

app.route("/sendMessage").post(sendMsg);
app.route("/hi").get((req, res) => {
  var fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  return res.json({ sayhi: `hello world from server ${fullUrl}` });
});

app.listen(port, () => {
  console.log(`server is listining on ${port}`);
  console.log("This process is your pid " + process.pid);
});
