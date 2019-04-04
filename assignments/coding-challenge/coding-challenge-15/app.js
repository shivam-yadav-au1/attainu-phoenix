'use strict';
var fs = require("fs");
var mongodb = require("mongodb")

var DB;
var Books = []

var mongoClient = new mongodb.MongoClient("mongodb://localhost:27017/library", { useNewUrlParser: true });
mongoClient.connect(function (error) {
    if (error) {
        console.log("Error connecting to the database.");
    } else {
        console.log("DB connection established.");
        DB = mongoClient.db("library");
    }
});


var readFile = function (fileName, callBackFun) {
    fs.readFile(fileName, function (err, data) {
        if (err) {
            console.log("Could not read file");
        }
        // console.log(data.toString())
        Books.push(data.toString())
        callBackFun(Books);
    });   
}

var putDataIntoDb = function (dataArray) {
    console.log("putDataIntoDb called...")
    var book;
    console.log("books array size is :" + dataArray.length)
    for (var i = 0; i < dataArray.length; i++) {
        console.log(dataArray[i].author+" "+dataArray[i].country)
        book = {
            book: dataArray[i]
        }
        console.log(book.toString())
    }
}

readFile("books.json", putDataIntoDb);
