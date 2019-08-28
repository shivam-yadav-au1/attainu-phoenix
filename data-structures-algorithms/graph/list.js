class Node {
    constructor(value,next=null){
        this.value = value;
        this.next = next;
    }
    
    toString(){
        return this.value;
    }
}

let n = new Node(100);
// console.log(" "+n)

class LinkedList{

    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(value){

        let newNode = new Node(value);
        if(!this.tail){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.print();
    }

    prepend(value){

        let newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.print();
    }

    search(value){

        let currentNode = this.head;
        while(currentNode){
            if(currentNode.value === value){
                return currentNode.value;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    print() {

        let currentNode = this.head;
        let values = [];
        while(currentNode){
            // console.log(currentNode.value);
            values.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(values);
    }

    delete(value) {

        if(!this.head){
            return null;
        }

        if(this.head === value){
            this.head = this.head.next;
            return;
        }


        let currentNode = this.head;
        while(currentNode.next){
            if(currentNode.next.value === value){
                currentNode.next = currentNode.next.next;
                break;
            }
            currentNode = currentNode.next;
        }
        
        if(this.tail.value === value){
            this.tail = currentNode;
        }
        
    }
}

module.exports = LinkedList;

let l = new LinkedList();

l.append("Javascript");
l.append("Python");
l.append("Rust");
l.append("Go");

// l.print();
l.prepend("C++");
l.prepend("Cobol");

console.log(l.search("Linux"))
console.log(l.search("Go"))
l.delete("Rust")
l.delete("Javascript")
l.print();
