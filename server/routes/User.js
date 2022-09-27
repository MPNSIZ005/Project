const express = require("express");

// userRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /user.
const userRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This section will help you get a list of all the users that have created an account in the system
userRoutes.route("/users").get(function (req, res) {
  let db_connect = dbo.getDb("researcher");
  db_connect
    .collection("User")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single user by the provided email address
userRoutes.route("/user/:email").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { email: req.params.email};
  db_connect
      .collection("User")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new record.
recordArticleRoutes.route("/createaccount/user").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    fullname: req.body.fullname,
    email: req.body.email,
    password: req.body.password,
  };
  db_connect.collection("User").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});


module.exports = userRoutes;