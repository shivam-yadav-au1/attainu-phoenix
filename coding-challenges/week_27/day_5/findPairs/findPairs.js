
function findPairs(num,arr){

	let sum;
	let allPair = []
	let obj ={}

	for(let i=0;i<arr.length ;i++){
		for(let j=0;j<arr.length;j++){
			
			sum = arr[i] + arr[j];
			if(sum === num){
				obj={
					first:arr[i],
					second:arr[j]
				}
				allPair.push(obj);
			}

		}
	}
	return allPair;

}


function main(){

	console.log(findPairs(10,[1, 2, 4, 5, 6, 10, 12]))

}

main()