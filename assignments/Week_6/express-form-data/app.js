'use strict'

// Include express in application
var express = require('express')

// Include bodyParser to handle post request in application
var bodyParser = require('body-parser')

// Create express app
var app = express()
// set app view engine to hbs 
app.set("view engine","hbs")

// Tell Express app that we are using body parser to handle post request
app.use(bodyParser.urlencoded({ extended: false  }));

// Global PLAYERS  variable to handle data throughout app
var PLAYERS = []

app.get("/", function (request, response) {
    console.log("/player route executed...")
    var data = {
        players:PLAYERS,
        userName:"Shivam"
    }
    response.render("index.hbs",data)

})

app.post("/players",function(request,response){
    var playerName = request.body.playerName
    var countryName = request.body.countryName
    var player = {
        name:playerName,
        country:countryName
    }
    console.log("Player Name :"+player.name+" "+player.country)
    if(playerName && countryName){
        PLAYERS.push(player)
    }
    

    response.redirect("/")
})
app.listen(process.env.PORT || 3000)