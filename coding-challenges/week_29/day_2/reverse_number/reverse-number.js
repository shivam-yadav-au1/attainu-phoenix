
function reverseNumber(num) {

    let isNegative = false
    if (num < 0) {
        isNegative = true;
        num = Math.abs(num);
        
    }

    let rev = 0;
    if (num > 0) {
        while (num != 0) {
        
            let digit = num % 10;
           
            rev = rev * 10 + digit;
         
            num = Math.floor(num / 10);

        }

    }

    rev = isNegative ? -Math.abs(rev) :rev;
    return rev;
}

function main() {
    console.log(reverseNumber(-120));
    console.log(reverseNumber(120));
    console.log(reverseNumber(123));
    console.log(reverseNumber(-123));
}

main();


/*

rev = 3
rev = 32
rev = 320+321
*/