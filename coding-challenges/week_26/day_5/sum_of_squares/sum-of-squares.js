function sumOfSquares(num){

	let sum =0;
	let square =0;
	for(var i=0;i<=num;i++){
		square = i * i;
		sum += square;
	}
	return sum;
}

function squareOfSums(num){

	let sum =0;
	for(var i=0;i<=num;i++){
		sum += i;
	}
	return sum * sum;
}

function main(){
	let sum1 = sumOfSquares(100);
	let sum2 = squareOfSums(100);
	let diff = sum2 - sum1;
	console.log(diff);
	
}

main();