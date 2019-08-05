const fs = require('fs');


function readFile(fileName){
    fs.readFile(fileName,"utf-8",(error,data)=>{
        if(error){
            console.log(data);
            return;
        }
        data = data.split("/n");
        data.forEach((line,index)=>{
            console.log(line+"  ===   "+index);
        })



    })
}

function sortData(data){

}

readFile("computers-datafile.csv");