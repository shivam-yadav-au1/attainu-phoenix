
function sumOfDigit(num,pow){

	let result = Math.pow(num,pow);
	//console.log(BigInt(result));
	let digits = BigInt(result).toString().split('');
	let digitsNumber = digits.map(Number);
	let sum = 0;
	for(var i=0;i<digitsNumber.length;i++){
		//console.log(typeof digitsNumber[i]);
		sum += digitsNumber[i];
	}
	//console.log(sum);
	return sum;
}

function main(){
	let result = sumOfDigit(2,1000)
	console.log(result);
}
main();