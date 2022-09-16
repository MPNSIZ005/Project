const express = require("express");
const app = express();
const cors = require("cors");
var fs = require('fs');
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
app.use(require("./routes/recordarticle"));
app.use(require("./routes/researcher2article"));
// get driver connection
const dbo = require("./db/conn");

/*app.get('/',function(req,res) {
  res.send(" <html> <head> <script src='https://unpkg.com/@mongodb-js/charts-embed-dom@beta' ></script> </head> <body> <div id='632392dd-af2d-40cb-8180-849622f8f5c8'></div> <iframe style='background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);' width='940' height='680' src='https://charts.mongodb.com/charts-project-0-qwzco/embed/charts?id=632392dd-af2d-40cb-8180-849622f8f5c8&maxDataAge=3600&theme=light&autoRefresh=true'></iframe> <script> const sdk = new ChartsEmbedSDK({baseUrl: 'https://charts.mongodb.com/charts-project-0-qwzco'});const chart = sdk.createChart({ chartId: '7f535ee7-2074-4350-9f94-237277b94391' }); chart.render(document.getElementById('chart')); </script> </body> </html>");
});*/

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${port}`);
});
