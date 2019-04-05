'use script'

var express = require('express')
var bodyParser = require("body-parser")

var app = express()

app.set("view engine","hbs")

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static('public'))

var userDB = [
    {name: "ansal", password: "ansal123"},
    {name: "vaibhav", password: "vaibhav123"},
    {name: "divyam", password: "divyam123"}
  ];

  app.get("/",function(request,response){
      response.render("index.hbs")
  })


  app.post("/login",function(request,response){

    console.log("/login route execueted ....")

    var data = {
        name:request.body.name,
        password:request.body.password
    }

    for(var i =0;i<userDB.length;i++){

        if(userDB[i].name == data.name && userDB[i].password == data.password){
            console.log("Matched ....")
            response.send("Success")
            return;
        }
        
    }
    console.log("Failed ...")
    response.send("Failed")


  })

  app.listen(3000);