const LinkedList = require('./list.js');

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
            sum += char.charCodeAt(0);
        })
        // console.log(sum)
        return sum % this.size;
    }

    getList(key) {
        let hashId = this.hashCode(key);
        let linkedList = this.array[hashId];
        return linkedList;
    }

    set(key, value) {

        let linkedList = this.getList(key);

        let node = linkedList.search(key);
        if (node) {
            node.data = value;
        } else {
            linkedList.append(key, value);
        }
    }

    get(key){
        let linkedList = this.getList(key);

        let node = linkedList.search(key);
        // console.log("node ", node);
        if(node){
            console.log(node.data)
            return node.data;
        }else{
            return null;
        }
    }

    print() {
        this.array.forEach((a) => {
            a.print();
        })
    }

}

let h = new HashTable();

h.set("Instructor", "Ansal")
h.set("Fruit", "Mango")
h.print();

console.log("\n\n")
console.log(h.get("Fruit"))