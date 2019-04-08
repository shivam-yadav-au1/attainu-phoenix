'use strict';

// Include all the packages/modules we need.
var express = require("express");
var mongo = require("mongodb");
var bodyParser = require("body-parser");

var app = express();

// App configurations and settings.
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static('public'))


// Create the DB connection
var DB;

// Create a Mongo client
var mongoClient = new mongo.MongoClient("mongodb://localhost:27017/library", {useNewUrlParser: true});
mongoClient.connect(function(error){
    if(error) {
        console.log("Error connecting to the database.");
    } else {
        console.log("DB connection established.");
        DB = mongoClient.db("library");
    }
});

app.get("/",function(request,response){
    response.render("index.hbs");
})

// Get all books from DB
app.get("/books",function(request,response){
    console.log("/books route called ...")
    DB.collection("books").find({}).toArray(function(error,books){
        if(error){
            console.log("error occured while connecting to students collections");
            return;
        }
        response.send(books);
    });
})

app.listen(3000);