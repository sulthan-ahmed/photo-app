//imports or libraries
var express      = require("express");
var instagram   = require('instagram-node').instagram();

var path = require('path');

//set up the router and server
var app = express();

// setup render engine, hogan
app.set('view engine', 'ejs');

//start server
app.listen(7070, function(){
    console.log("Server running on http://localhost:7070");
});