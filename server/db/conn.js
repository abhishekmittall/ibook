const mongoose = require("mongoose");
require("dotenv").config();

const DB = process.env.DB_URL;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection Successful."))
  .catch((err) => console.log(err));
