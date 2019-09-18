
function toInteger(num) {

    let result = 0;
    for (let i = 0; i < num.length; i++) {
        // console.log(num2.charCodeAt(i))
        result = result * 10 + (num.charCodeAt(i) - "0".charCodeAt(0));
    }
    return result;
}


function product(num1, num2) {


   return toInteger(num1) *  toInteger(num2);


}

function main() {
    let result = product("123", "456");
    console.log(result);
}


main();