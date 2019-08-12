const LinkedList = require('./list.js');

class Stack extends LinkedList{

   
    push(value){
        this.prepend(value);
    }

    pop(){
        if(!this.head){
            return null;
        }

        let removedValue = this.head.value;
        this.head = this.head.next;
        return removedValue;
    }
} 

let stack = new Stack();
stack.push(3);
stack.push(2);
stack.push(65);
stack.push(32);

stack.print();
stack.pop()
stack.print();