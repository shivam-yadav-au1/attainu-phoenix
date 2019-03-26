'use strict';
var fs = require("fs");

// loop a string 

var loop = function(string,n){
    var repeatedString = "";
    for(var i=0;i<=n;i++){
        repeatedString +=string
    }
    return repeatedString;
}

// Write message into file 
var messageWriter = function (fileName, message, num) {
    
        fs.writeFile(fileName, loop("Welcome to AttainU\n",50), function (err) {
            if (err) throw err;
            console.log('Saved!');
        })
  

}

messageWriter("Hello.txt", "Welcome to AttainU\n", 50);





