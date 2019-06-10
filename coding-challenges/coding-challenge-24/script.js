class MyArray {
  constructor(...array) {
    this.array = array; 
  }
  print() {
  
   console.log(this.array)
  }

  search(number) {
    let num = [];
    num = this.array;
    for(let i=0;i<num.length;i++){
      if(number == num[i]){
        return i
      }
    }
    return -1
  }
}

class MySet{
  
  constructor(...numbers){
    this.set = new Set(numbers);
  }
  print(){
    this.set.forEach(function(element){console.log(elment)});
  }
  search(num){
    return this.set.has(num); 
  }
  print(){
    console.log(this.set);
  }
}

myArray = new MyArray(1, 4, 2, 8, 9);
myArray.print()
console.log(myArray.search(9));

mySet = new MySet(1, 4, 2, 8, 9);
mySet.print()
console.log(mySet.search(7));

