const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
//const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the publications fro the provided author.
recordRoutes.route("/researchtopic/:name").get(function (req, res) {
  let db_connect = dbo.getDb("researchers");
  db_connect
    .collection("records")
    .find({specialisation: req.params.name})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});


//module.exports = researchTopicRoutes;
module.exports = recordRoutes;