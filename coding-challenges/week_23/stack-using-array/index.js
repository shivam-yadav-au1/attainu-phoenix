


class Stack{

    constructor(arr=[]){
        this.arr = arr
       
    }

    push(value){

        this.arr.push(value);
    }

    print(){
        console.log(this.arr)
    }

    pop(){
      let lastIndex = this.arr.length;
      this.arr.splice(lastIndex-1,1);
    }
}

let stack = new Stack();
stack.push(5)
stack.push(4)
stack.push(3)
stack.push(2)

stack.print();
stack.pop()
stack.print()
stack.pop()
stack.print()
stack.pop()
stack.print()