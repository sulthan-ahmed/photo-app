//imports or libraries
var express      = require("express");
var instagram   = require('instagram-node').instagram();

//set up the router and server
var app = express();

// setup render engine, hogan
app.set('view engine', 'ejs');

//__dirname is string referring to the name of the directory that this script resides in.
// e.g. /Users/Sulthan/Development/training/photo-app
// local to each module so it will change in each module
app.use(express.static(__dirname + '/public'));

//start server
app.listen(7070, function(){
    console.log("Server running on http://localhost:7070");
    console.log("the variable __dirname is" + " " + __dirname);
});