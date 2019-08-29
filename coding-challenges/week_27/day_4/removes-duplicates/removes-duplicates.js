function removeDuplicates(arr){

	let visited =[];

	let set = new Set();

	for(let i=0;i<arr.length;i++){
		
		if(!set.has(arr[i])){

			set.add(arr[i]);
			visited.push(arr[i]);
		}	
		
	}

	return visited;

}

function main(){

	let arr = [1, 2, 2, 3, 4, 5, 6, 6, 7];

	console.log(removeDuplicates(arr));
}


main();