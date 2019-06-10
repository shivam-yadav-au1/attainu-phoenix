function MyArray(array){
  var arr = []
  for(var i=0;i<arguments.length;i++){
    arr.push(arguments[i])
  }
  this.array = arr;
}

MyArray.prototype.print = function(){
  console.log(this.array)
}

MyArray.prototype.search = function(num){
    var arr = this.array;
    // console.log(num)
    for(var i=0;i<arr.length;i++){
      // console.log(arr[i])
      if(arr[i] == num){
        return i
      }
    }
    return -1
}

MyArray.prototype.sort = function(){
  var arr = this.array;
  arr.sort(function(a,b){
    return b-a
  })
  return arr;
}

var myArray = new MyArray(3,6,2,8,9)
myArray.print()
console.log(myArray.search(7))
console.log(myArray.sort())