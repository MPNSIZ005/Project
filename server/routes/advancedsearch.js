const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordArticleRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the records that matches the fields specified
recordArticleRoutes.route("/search/:query,:gender,:province,:institution").get(function (req, res) {
  let db_connect = dbo.getDb("researcher");

  //check if the system detects empty parameter
  if (req.params.query.length==0 || req.params.query == " ") {
    console.log("The name is empty");
  }
  
  //Check if the passed parameters are not empty
  let querie = "";
  let gnder = "";
  let region = "";
  let insti = "";
  let comQuery = [];
  if (req.params.query.length !=0 && req.params.query != " ") {
    querie = {nameAndSurname: req.params.query};
    comQuery.push(querie);
  }
  if (req.params.gender.length !=0 && req.params.gender != " ") {
    gnder = {gender: req.params.gender};
    comQuery.push(gnder);
  }
  if (req.params.province.length !=0 && req.params.province != " ") {
    region = {Province: req.params.province};
    comQuery.push(region);
  }
  if (req.params.institution.length !=0 && req.params.institution != " ") {
    insti = {institution: req.params.institution};
    comQuery.push(insti);
  }
  let dequery ={};

  //Creating a string of advanced query
  for (i=0; i< comQuery.length; i++) {
    dequery = Object.assign(dequery, comQuery[i]);
    //console.log(dequery);
  }

  console.log(dequery);

  const options = {
    // sort returned documents in ascending order by title (A->Z)
    sort: { nameAndSurname: 1 },
  // Include only the `title` and `imdb` fields in each returned document
    projection: { _id: 0},
  };
  
  
  db_connect
    .collection("records")
    .find(dequery, options)
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
recordArticleRoutes.route("/recordarticle/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("recordarticles")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

module.exports = recordArticleRoutes;