function randomArray(max){
    let arr = [];
    for(var i=0;i<= max;i++){
        arr.push(Math.floor(Math.random()*10));
    }
    return arr;
}


function binarySearch(array,key){
        let start = 0,
            end = array.length-1;

            while(start <= end){
                let middle = Math.floor((start + end)/2);
                if(array[middle] === key){
                    return middle;
                }else if( key > array[middle]){
                    start = middle +1;
                }else if(key < array[middle]){
                    end = middle-1;
                }
            }

            return -1;
}

function main(){
    let x = randomArray(10);
    console.log(x);
    console.log(binarySearch(x,5))
}

main();