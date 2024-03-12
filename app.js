const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

const mongoose = require("mongoose");
//configure mongoose
mongoose
  .connect("mongodb://127.0.0.1:27017/Project")
  .then(console.log("Ok"))
  .catch((error) => handleError(error));

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello Thuan");
});

const blogRouter = require("./routes/BlogRoutes");
app.use("/api/blogs", blogRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
