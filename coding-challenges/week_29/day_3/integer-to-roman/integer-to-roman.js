


function integerToRoman(num){

    let roman = ["M","CM","D","CD","C","XC","L",
                "XL","X","IX","V","IV","I"];
    let values = [1000,900,500,400,100,90,50,40,10,9,
    5,4,1];

    if(num > 3999 || num < 0){
        return ;
    }
    let i =0;
    let romanNumber = "";
    while(num > 0){
        if(num - values[i] >=0 ){
            romanNumber = romanNumber.concat(roman[i]);
            num = num - values[i];
        }else{
            i++;
        }
    }

    return romanNumber;

}

function main(){
   console.log( integerToRoman(49));
}

main();