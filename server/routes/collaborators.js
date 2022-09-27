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
  articles = []
  recordRoutes.route("/collabos/:name").get(function (req, res) {
  
    let db_connect = dbo.getDb("researchers");

      const options = {
      // sort returned documents in ascending order by title (A->Z)
      sort: { nameAndSurname: 1 },
      // Include only the `title` and `imdb` fields in each returned document
      projection: { title: 1, _id : 0},
    };

    var mycollabos = [];

    db_connect
    .collection("recordarticles")
                  .find({author: req.params.name}, options)
                  .toArray(function (err, result) {
                    {
                      if (err) throw err;
                      for (i = 0; i< result.length; i++) {
                        articles.push(result[i].title);
                        //console.log(result[i].title);
                        //Object.assign(result[i-1].title, result[i].title)
                      }
                      mycollabos = collabo(articles, req.params.name).then(
                        console.log("We are waiting")
                      );

                      for (i =0; i<9000; i++);
                      
                      res.json(mycollabos);

                      
                      
                      }
                  });
});

/*for (i=0; i< articles.length; i++) {
                   
  console.log(articles);
}*/

async function collabo(articles, researcher) {

  // This section will help you get a list of all the Authors from the provided article topic.
  myresult ={};
  recordRoutes.route("/collabos/").get(function (req, res) {
    let db_connect = dbo.getDb("researchers");
    db_connect
      .collection("recordarticles")
      .find({title: {$in: articles}},{
        // sort returned documents in ascending order by title (A->Z)
        sort: { author: 1 },
        // Include only the `title` and `imdb` fields in each returned document
        projection: { author: 1, _id: 0},
      } )
      .toArray(function (err, result) {
        if (err) throw err;
        //check for duplicates
       var myresult = [];
       var duplicates = [];
       
        for (i =0; i< result.length; i++) {

          index = duplicates.indexOf(result[i].author);
          //console.log(index);

          if (index == -1 && result[i].author != researcher) {
            duplicates.push(result[i].author);
            myresult.push(result[i]);
            //console.log(result[i].author);
          }
     
        }
        //res.json(myresult);
        myresult = result;
      });
  });

  return myresult;
}



module.exports = recordRoutes;