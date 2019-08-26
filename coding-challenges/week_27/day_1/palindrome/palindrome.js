
function palindrome(str){

	let orignalString = str;
	let reverseString = "";

	for(var i=str.length;i >= 0;i--){
		reverseString = reverseString.concat(str.charAt(i));
	}
	let isPalindrome = reverseString === orignalString ? true:false;
	return isPalindrome;
}



var stdin = process.openStdin();

stdin.addListener("data", function(d) {

  	let input = d.toString().trim();
  	console.log(palindrome(input))
  });