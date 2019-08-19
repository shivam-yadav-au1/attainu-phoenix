

function mergeArray(a,b){

	
	let outPut = [];
	for(var i=0;i<a.length;i++){
		outPut.push(a[i]);
	}
	for(var j=0;j<b.length;j++){
		outPut.push(b[j]);
	}
	for(var i=0;i<outPut.length;i++){
		for(var j=0;j<outPut.length;j++){

			if(outPut[j] > outPut[j+1]){
			var temp = outPut[j];
			outPut[j] = outPut[j+1];
			outPut[j+1] = temp;
			}
		}
		
	}
return outPut;


}

function main(){
	let a = [4,8,56,23,9,66];
	let b = [6,2,0,1,13,4];
	let result = mergeArray(a,b);
	console.log(result)
}

main();