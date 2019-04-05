var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.set("view engine","hbs")

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static('public'))

var CONTACTS =[]
app.get("/",function(request,response){

    console.log("Route executed....")

    response.render("index.hbs")
})

app.get("/contacts",function(request,response){
    console.log("route executed...")
    response.json(CONTACTS)
})

app.post("/contacts",function(request,response){
    console.log("contacts route executed...")

    var data = {
        name:request.body.name,
        phoneNumber:request.body.phoneNumber
    }
    console.log(data)
    CONTACTS.push(data);
    response.json(data);
})

app.listen(3000)