const express = require("express");
const process = require("process");
const apiRouter = require("./routes/apiRoutes");
const cors = require("cors");

const app = express();
const port = 7070;
app.use(express.json());
app.use(cors());

app.use("/api", apiRouter);
app.route("/hi").get((req, res) => {
  console.log("returned date");
  return res.status(200).json({ message: new Date(Date.now()).toString() });
});

// app.route("/").get((req, res) => {
//   var fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;

//   return res.json({ fullUrl });
// });

app.listen(port, () => {
  console.log(`server is listining on ${port}`);
  console.log("This process is your pid " + process.pid);
});
