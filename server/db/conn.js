const mongoose = require("mongoose");
// require("dotenv").config();

// const DB = process.env.DB_URL;
const DB =
  "mongodb+srv://abhishek:Abhishek12345@cluster0.7e7onyj.mongodb.net/iBook?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection Successful."))
  .catch((err) => console.log(err));
