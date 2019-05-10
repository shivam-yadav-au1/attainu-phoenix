let fs = require('fs');

class MyFile {
    constructor(fileName) {
        this.fileName = fileName;
    }

    get data() {
        let contents = fs.readFileSync(this.fileName, 'utf8');
        return contents;
    }

    set data(value) {
        try{
            fs.writeFileSync(this.fileName,value,'utf8');
        }catch(exp){
            console.log(exp);
        }
    }
}

let myFile = new MyFile('file.txt');
//Writing data in file
myFile.data = "Shivam Yadav"
//Reading data in file 
console.log("Content in File :"+myFile.data)