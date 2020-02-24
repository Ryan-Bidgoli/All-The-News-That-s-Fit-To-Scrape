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
