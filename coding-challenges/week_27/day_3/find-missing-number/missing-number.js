
function findMissingNumber(arr){

	let startElement = arr[0];
	let endElement = arr[arr.length-1];
	let missing = [];
	let num = startElement;
	
	for(num=0+1; num<=endElement ;num++){
		if(arr.indexOf(num) === -1){
			missing.push(num);
		}
	}
	return missing;

}

function main(){

	let arr = [1,2,3,4,5,9,10];
	console.log(findMissingNumber(arr));
}

main();