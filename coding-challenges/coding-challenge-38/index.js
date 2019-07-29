let fs = require('fs')
let readline = require('readline');

function searchFile(fileName, target) {
    
    let fileStream = fs.createReadStream('file.txt')
    let content = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    })
    let lineNumber = 0;
    content.on('line', (line) => {
        lineNumber = lineNumber + 1;
       if(line.search(target) === 0){
           console.log(lineNumber,line)
       }
        
    });
   
 
}

searchFile("file.txt", "Apple")