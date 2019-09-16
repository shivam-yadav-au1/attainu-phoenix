

function divide(dividend,divisor){

    // check whether dividend or divisor is negative or not
    let sign = 1;
    if(dividend < 0 || divisor < 0){
        sign = -1;
    }

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    let quotient = 0;
    //subtract divisor from dividend till dividend is less
    // then divisor and increment quotient counter by one on
    //each interation .
    while(dividend >= divisor){
        dividend = dividend - divisor;
        ++quotient;
    }

    return sign === -1 ? quotient * sign :quotient;

}

function main(){
    let result = divide(43,-8)
    console.log(result);
}

main();