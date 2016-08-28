var express = require("express");
var app = express();
app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'))
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
];

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.listen(4000, function(){
  console.log("app listening on port 4000");
});

app.get("/", function(req, res){
  var compliment = compliments[Math.floor(Math.random() * compliments.length)];
  var color = colors[Math.floor(Math.random() * colors.length)];
  res.render("index.hbs", {compliment: compliment, color: color})
})

app.get("/:name?", function(req, res){
  var compliment = compliments[Math.floor(Math.random() * compliments.length)];
  var color = colors[Math.floor(Math.random() * colors.length)];
  var name = req.params.name
  res.render("name.hbs", {compliment: compliment, color: color, name: name})
})

app.post("/:name/new", function(req, res){
  var name = req.params.name
  compliments.push(req.body.name)
  res.redirect('/' + name)
})
