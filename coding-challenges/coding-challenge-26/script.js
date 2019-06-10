var isPowerOfTwo = function(num) {

  n = num;
  
  while(n%2 == 0){
    // console.log("remainder "+n%2)
    
    n = Math.floor(n/2);
    // console.log("Number "+n)
  }
  if(n == 1){
    return true;
  }else{
    return false;
  }
}

console.log(isPowerOfTwo(12))
// console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(9))
// console.log(isPowerOfTwo(7))