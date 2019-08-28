function generate(str,k=str.length){

	// End Case for the recursion
	if(k === 1){return console.log(str.join(""))};

	//First recursive call
	generate(str,k-1);
	// Now the loop for iterating through  each
	//element and do the swapping 
	//Also ,at each iteration,we have to call
	// the generate function again.
	for(let i=0;i<k-1;i++){
		//Do the swap of characters
		//based on they are odd or even 
		if(i % 2 === 0){
			[str[i],str[k-1]] = [str[k-1],str[i]];
		}else{
			[str[0],str[k-1]] = [str[k-1],str[0]];
		}
		generate(str,k-1);
	}
}

generate("ABC".split(""));