var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");

var app = express();
var PORT = process.env.PORT || 3000
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var db = mongojs(process.env.MONGODB_URI || 'scraper', collections);
db.on("error", function (error) {
  console.log("Database Error:", error);
});

app.get("/", function(req, res) {
  res.render("index");
})

app.get("/scrape", function (req, res) {
db.scrapedData.drop()
  
    axios
    .get("https://kotaku.com/")
    .then(function (response) {
      var $ = cheerio.load(response.data);
      
      var results = [];
      
      $("article").each(function (i, element) {
        var title = $(element)
          .find("h1")
          .children("a")
          .text();
           var link = $(element)
          .find("h1")
          .children("a")
          .attr("href");
        var image = $(element)
          .find("source")
          .attr("data-srcset");
        var summary = $(element)
          .find("p").text();
      }
     if (title && link && image && summary) {
         db.scrapedData.insert({
          title: title,
          link: link,
          image: image,
          summary: summary
        }, 
       function(err, inserted) {
          if (err) {
            console.log(err);
          }
          else {
            console.log("scrapedData")
            console.log(inserted);
          }                         
      })                         
    });
      console.log(results);
    })
});
