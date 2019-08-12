var express = require("express")
var bodyParser = require("body-parser")


var app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.post("/add",function(request,response){
    console.log("/add route executed ...")
    var num1 = request.body.num1
    var num2 = request.body.num2
    console.log("Value of num1 :"+num1+" num2 :"+num2)
    var result = parseInt(num1) + parseInt(num2)
    console.log("Result : "+result)
    var data = {
        num1:num1,
        num2:num2,
        result:result
    }
    console.log(data)
    response.json(data)

})

app.post("/sub",function(request,response){
    var num1 = request.body.num1
    var num2 = request.body.num2
    
    var result = parseInt(num1) - parseInt(num2)
    
    var data = {
        num1:num1,
        num2:num2,
        result:result
    }
    
    response.json(data)
    
});
app.post("/mul",function(request,response){
    var num1 = request.body.num1
    var num2 = request.body.num2
    
    var result = parseInt(num1) * parseInt(num2)
    
    var data = {
        num1:num1,
        num2:num2,
        result:result
    }
    
    response.json(data)
})
app.post("/div",function(request,response){
    var num1 = request.body.num1
    var num2 = request.body.num2
    
    var result = parseInt(num1) / parseInt(num2)
    
    var data = {
        num1:num1,
        num2:num2,
        result:result
    }
    
    response.json(data)
})
app.listen(3000)