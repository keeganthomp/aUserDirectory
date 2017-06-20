var datafile = require('./data.js');
const mustache = require('mustache-express');
const express = require('express');
const app = express();
const port = 3050;


app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', './views');

app.listen(port, function(req, res){
    console.log("Im running on port", port);
});

app.get("/",  function(req, res){
    res.render("index", {datafile: datafile.users});
});


app.use("/", express.static("./views"));
