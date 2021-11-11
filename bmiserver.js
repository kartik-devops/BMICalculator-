const expressvar = require("express");
var app = expressvar();
const bodyParser  = require("body-parser");
app.use(bodyParser.urlencoded({extended : true}));

app.get("/",function(req,res){
  res.send("Please head over to directory bmicalculator");
})

app.get('/bmicalculator',function(req,res){
  res.sendFile(__dirname + "/bmicalc.html");
})

app.post('/bmicalculator',function(req,res){
  //res.send("Works Fine !!!");
  var height =  parseFloat(req.body.ht);
  var weight = parseFloat(req.body.wt);
  res.send("Bmi calculation of the data is " + weight/(height * height));
})

app.listen(3000 , function(req,res){
  console.log("Server started at 3000");
})
