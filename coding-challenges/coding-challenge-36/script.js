
var isPrime = function(num){

  var counter = 0;
  for(var i=1;i<=num;i++){
    if(num % i == 0){
      counter = counter +1;
    }
  }
  if(counter > 2){
    return false;
  }
  else{
    return true;
  }
}

var generatePrimeNumber = function(num){

  var primeNumbers = []
  for(var i=2;i<=num;i++){
    if(isPrime(i)){
      primeNumbers.push(i)
    }
  }
  return primeNumbers;
}
console.log(isPrime(241))
console.log(generatePrimeNumber(70))