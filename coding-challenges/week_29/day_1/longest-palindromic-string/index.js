
// babad
function longestPalindromicString(str) {

    let max =0;

    for (let i = 0; i <= str.length; i++) {
        for (let j = i; j <= str.length; j++) {
            if (str.substring(i, j) != '') {
                let substring = str.substring(i, j);
                if(isPalindrome(substring)){
                    max = Math.max(max,substring.length);
                }
               
            }

        }
    }
    return max;
}

function isPalindrome(str) {
    let temp = str;
    let reverse = str.split("").reverse().join("");
    // console.log(temp, reverse)
    if (temp === reverse) {
        return true;
    } else {
        return false;
    }
}

function main() {
    console.log(longestPalindromicString("babad"))
    console.log(longestPalindromicString("cbbd"))

}
main()