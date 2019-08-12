const fs = require('fs');
const LinkedList = require('./list');

class HashTable {
    constructor(size = 8) {
        this.size = size;
        this.array = [];
        for (var i = 0; i <= size; i++) {
            this.array.push(new LinkedList());
        }
    }

    hashCode(key) {
        let sum = 0;
        Array.from(key).forEach((char) => {
            sum = sum + char.charCodeAt(0);
        })
        return sum % this.size;
    }

    set(key, value) {
        let hashId = this.hashCode(key);

        let linkedList = this.array[hashId];
        let node = linkedList.search(key);

        if (node) {
            node.data = data;
        } else {
            linkedList.append(key, value);
        }
    }

    get(key) {
        let hashId = this.hashCode(key);
        let linkedList = this.array[hashId];
        let node = linkedList.search(key);
        if (node) {
            return node.data;
        } else {
            return null;
        }
    }

    print() {
        this.array.forEach((a) => {
            a.print();
        })
    }
}



// h.set("student","Shivam");
// h.set("Instructor", "Ansal")
// h.set("Fruit", "Mango")
// h.print();
// console.log(h.get("Fruit"))

function putDataInHashTable(fileName, callback) {
   
    fs.readFile(fileName, "utf-8", (error, data) => {
        if (error) {
            console.log(error);
            return
        }
        data = data.split("\n");
      
        let h = new HashTable(100);
        data.forEach((line, index) => {
            var word = line.split(",");
            // console.log(word[0], word[1]);
            h.set(word[0], word[1]);
          
        })
    
        callback(h)
    });
  
  
}

function printHastTable(h){
    console.log("printhashtable called ...")
        h.print();
}


function main() {
    putDataInHashTable("computers-datafile.csv",printHastTable);
}
main();