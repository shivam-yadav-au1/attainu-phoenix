
function bubbleSort(arr){
    console.log("Before sorting :",arr)
    let steps = 0;
    for(var i=0;i<arr.length;i++){

        for(var j=0;j<arr.length-i;j++){

            steps +=1;
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
  
    return arr;
}

let array = [25,27,29,31,11,13,15,17,19,21,23,55,57,59,61,63,65,35,37,39,41,1,3,5,7,9,81,83,85,87,89,91,93,95, 43,45,47,49,51,53,71,73,75,77,79,97,99,67,69,33];
console.log(bubbleSort(array));