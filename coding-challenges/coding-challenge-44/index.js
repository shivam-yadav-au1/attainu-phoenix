function randomArray(max){
    let arr = [];
    for(var i=0;i<= max;i++){
        arr.push(Math.floor(Math.random()*10));
    }
    return arr;
}



function largest(arr){
    let largest = Math.max.apply(null,arr);
    return largest;
}

function smallest(arr){
    let smallest = Math.min.apply(null,arr);
    return smallest;
}

function main(){
    let x = randomArray(10);
    console.log(x);
    console.log("Largest ===> ",largest(x));
    console.log("Smallest ===> ",smallest(x));
}

main();
