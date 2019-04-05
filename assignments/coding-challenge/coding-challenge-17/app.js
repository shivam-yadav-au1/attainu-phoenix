'use strict';
var fs = require("fs");
var mongodb = require("mongodb")

var DB;
var Books;

var readFile = function (fileName, callBackFun) {
    console.log("File Reading started ....")
    fs.readFile(fileName, function (err, data) {
        if (err) {
            console.log("Could not read file");
        }
        Books = JSON.parse(data)

        callBackFun(Books);
    });
}

var putDataIntoDb = function (books) {
    console.log("Books length :"+books.length)
    var mongoClient = new mongodb.MongoClient("mongodb://localhost:27017/library", { useNewUrlParser: true });
    mongoClient.connect(function (error) {
        if (error) {
            console.log("Error connecting to the database.");
        } else {
            console.log("DB connection established.");
            DB = mongoClient.db("library");
            DB.collection("books").insertMany(books, function (error, result) {
                if (error) {
                    console.log("Failed to Store Books in DataBase.")
                    return;
                }
                console.log("Books inserted ..Books Size :" + books.length)
            });
        }
    });
}

readFile("books.json", putDataIntoDb);
