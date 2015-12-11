//imports or libraries
var express      = require("express");
var instagram = require('instagram-node').instagram();

//set up the router and server
var app = express();


//__dirname is string referring to the name of the directory that this script resides in.
// e.g. /Users/Sulthan/Development/training/photo-app
// local to each module so it will change in each module
app.use(express.static(__dirname + '/public'));

// setup render engine, hogan
app.set('view engine', 'ejs');

instagram.use({
    client_id: '2571c3a36a7a4a60809651f64bdfe8d3',
    client_secret: 'd6971f3f37b446f7b6ccb35b70df0e6e'
});

app.get('/', function(req, res){
    instagram.media_popular(function (err, medias, remaining, limit){

        res.render('public/views/main/index', {grams: medias})
    });
});

//start server
app.listen(7070, function(err){
    if(err){
        console.log('error');
    } else {
        console.log("Server running on http://localhost:7070");
        console.log("the variable __dirname is" + " " + __dirname);
    }
});