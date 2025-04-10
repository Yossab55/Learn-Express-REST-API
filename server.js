require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(process.env.DATABASE_URI)
  .then(app.listen(3000, () => console.log("server on port 300")));

const db = mongoose.connection
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("DataBase is opened"));

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const subscribersRouter = require("./routers/subscribers");

app.use("/subscribers", subscribersRouter)