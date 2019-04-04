'use strict'

var express = require('express')
var bodyParser = require('body-parser')
var mongodb = require('mongodb')

var app = express()
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "hbs");

var DB;

var mongoClient = new mongodb.MongoClient('mongodb://localhost:', { useNewUrlParser: true });
mongoClient.connect(function (error) {
    if (error) {
        console.log("Error connecting to MongoDB.")
    } else {
        console.log("Connection to MongoDB database blog established.");
    }
    DB = mongoClient.db("blog");
});

app.get("/", function (request, response) {
    DB.collection("posts").find({}).toArray(function (error, allPosts) {
        if (error) {
            response.send("Error fetching blog posts");
        }
        else {
            var data = {
                allPosts: allPosts
            };
            response.render("index.hbs", data);
        }
    });

});

app.get("/add", function (request, response) {
    var data = {};
    if (request.query.success) {
        data.postAdded = true;
    }
    response.render("add.hbs", data);
});

app.post("/add", function (request, response) {
    var data = {
        title: request.body.title,
        content: request.body.content
    };
    DB.collection("posts").insertOne(data, function (error, result) {
        if (error) {
            response.send("Error creating your blog post");
        } else {
            response.redirect("/add?success=true");
        }
    });

});

// Show edit form
app.get("/edit/:mongoId", function (request, response) {

    var mongoId = request.params.mongoId;
    var editSuccess = request.query.success;
    console.log(mongoId)
    DB.collection("posts").findOne({ _id: mongodb.ObjectID(mongoId) }, function (error, data) {
        if (error) {
            response.send("Error :Not Found");
            return;
        }
        if (editSuccess) {
            data.success = true;
        }
        response.render("edit.hbs", data);
    });

});

// Update a blog post 
app.post("/edit/:mongoId", function (request, response) {

    var mongoId = request.params.mongoId;
    var newTitle = request.body.title;
    var newContent = request.body.content;

    DB.collection("posts").updateOne(
        { _id: mongodb.ObjectID(mongoId) },
        { $set: { title: newTitle, content: newContent } },
        function (error, data) {
            response.redirect("/edit/" + mongoId + "?success=true")
        });

});
//Signup Form

app.get("/signup", function (request, response) {

    var data = {}
    if (request.query.success) {
        data.userCreated = true;
    }
    response.render("signup.hbs", data)
})

app.post("/signup", function (request, response) {

    var data = {
        userName: request.body.userName,
        password: request.body.password
    }

    DB.collection("user").insertOne(data, function (error, result) {
        if (error) {
            response.send("Error while signup .");
        } else {
            response.redirect("/signup?success=true");
        }
    });
});

app.get("/login", function (request, response) {
    var data = {}
    if(request.query.success){
        data.logIn = true;
    }
    response.render("login.hbs",data)
});

app.post("/login", function (request, response) {
    var data = {
        userName: request.body.userName,
        password: request.body.password
    }
    DB.collection("user").findOne({ userName: data.userName, password: data.password}, function (error, data) {
        if (error) {
            response.send("Error :Not Found");
            return;
        }
        else {
            response.redirect("/login?success=true");
        }

    })
});


app.listen(3000)