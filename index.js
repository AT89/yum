var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
var express = require("express");
var hbs     = require("express-handlebars");
var parser = require("body-parser");
var Restauraunt = mongoose.model("Restauraunt"
var MenuItem = mongoose.model("MenuItem");

var app = express();

app.set("port", process.env.PORT || 1337);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));
