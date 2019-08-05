const fs = require('fs');

function randomArray(max){
    let arr = [];
    for(var i=0;i<= max;i++){
        arr.push(Math.floor(Math.random()*10));
    }
    return arr;
}

function readFile(fileName,callBack){
    fs.readFile(fileName,"utf-8",callBack);
}

function mergeArrays(left,right){
    let merged = [];
    console.log("line 17",left)
    while(left.length && right.length){
        let smallest;
        if(left[0] < right[0]){
            smallest = left.shift();
        }else{
            smallest = right.shift();
        }
        merged.push(smallest);
    }

    if(left.length){
        merged = merged.concat(left);
    }
    if(right.length){
        merged = merged.concat(right);
    }
    return merged;
}

function mergeSort(err,data){
    if(err){
        console.log(err)
        return;
    }
    let csv = data.trim().split("\n");
    // console.log(csv.length)

    if(csv.length === 1){
        return csv;
    }
    let middle = Math.floor(csv.length/2);
    let left = csv.slice(0,middle);
    let right = csv.slice(middle,csv.length);
    // console.log(" left ",left,"right",right)
    let leftSortedArray = mergeSort(left);
    let rightSortedArray = mergeSort(right);

    // console.log(leftSortedArray,rightSortedArray)
    return mergeArrays(leftSortedArray,rightSortedArray);
}

// let myArray = randomArray(10)
// console.log(myArray)
// console.log(mergeSort(myArray));
function main(){
    readFile("computers-datafile.csv",mergeSort);
}

main();