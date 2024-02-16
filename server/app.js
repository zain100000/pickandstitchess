const path = require("path");
const express = require("express");
const session = require("express-session");
const crypto = require("crypto");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const gentsOrderRoutes = require("./routes/gentsOrderRoute");
const ladiesOrderRoutes = require("./routes/ladiesOrderRoute");
const adminRoute = require("./routes/adminRoute");
const feedbackRoute = require("./routes/feedbackRoute");

const app = express();

app.use(bodyParser.json());

function generateSecretKey() {
  return crypto.randomBytes(32).toString("hex");
}

const secretKey = generateSecretKey();

app.use(
  session({
    secret: secretKey, // Replace with your secret key
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/samples/gents", express.static(path.join("samples", "gents")));
app.use("/samples/ladies", express.static(path.join("samples", "ladies")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api/gents", gentsOrderRoutes);
app.use("/api/ladies", ladiesOrderRoutes);

app.use("/api/admin", adminRoute);
app.use("/api/feedback", feedbackRoute);

mongoose
  .connect(
    `mongodb+srv://muhammadzainulabideen292:zain200000@cluster0.75h999j.mongodb.net/pickandstitches?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
