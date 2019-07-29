let fs = require('fs')


function search(fileName, target) {
    
   fs.readFile(fileName,"utf-8",(error,data)=>{
       if(error){
           console.log(error);
           return ;
       }
       data = data.split("\n");
       data.forEach((line,index)=>{
            if(line.includes(target)){
                console.log("Line ==>",index,target)
            }
       })
   })
    
}

function main(){

    if(process.argv.length !== 4){
        console.log("I need a file name and string to search ");
        return;
    }
    let fileName = process.argv[2];
    let searchWord =  process.argv[3];
    search(fileName,searchWord)
}
main();

