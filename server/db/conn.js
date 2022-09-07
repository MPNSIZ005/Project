
const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;
//var _db2;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("researchers");
        //_db2 = db.db("articles");
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
         });
  },

 /* getDb2: function() {
    return _db2;
  },
*/
  getDb: function () {
    return _db;
  },
};