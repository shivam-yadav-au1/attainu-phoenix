// ABC

function permute(str,startIndex,endIndex){

	for(var i=startIndex;i<=str.length;i++){

		str = swap(str,startIndex,i);
		permute(str,startIndex+1,endIndex)
	}
	
}

function swap(str,a,b){

	let temp;
	let charArray = Array.from(str);
	temp = charArray[a];
	charArray[a] = charArray[b];
	charArray[b] = temp;
	return charArray.toString();
}

function main(){
	//permutation("ABCD")
	let res = swap("ABC",1,2);
	console.log(res);
}
main();