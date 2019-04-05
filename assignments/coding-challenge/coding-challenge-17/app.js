'use strict'
var fs = require("fs");
var mongodb = require("mongodb");

var DB;


var fileWriterCallback = function(data){

    fs.writeFile("books.json", data, function (err) {
        if (err) {
            console.log("Error while Writing File ...")
            return;
        }
        console.log('File Written Successfully !');
    })

}
var getBooksFromDB = function (fileWriterCallback) {
    
    var mongoClient = new mongodb.MongoClient("mongodb://localhost:27017/library", { useNewUrlParser: true });
    mongoClient.connect(function (error) {
        if (error) {
            console.log("Error connecting to the database.");
        } else {
            console.log("DB connection established.");
            DB = mongoClient.db("library");
            DB.collection("books").find({}).toArray(function(error,data){
                if(error){
                    console.log("Error whiel fetching data from database.")
                    return;
                }
                // console.log(JSON.stringify(data))
                fileWriterCallback(JSON.stringify(data))
            });
        }
    });
}

getBooksFromDB(fileWriterCallback);