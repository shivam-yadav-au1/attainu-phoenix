


function subArrays(arr) {
    var subArray = []
    for (var i = 0; i <= arr.length; i++) {
        for (var j = 0; j <= arr.length; j++) {
            // console.log(arr.slice(i, j).toString());
            // sum = sum + sumOfArray(arr.slice(i, j));
            if (arr.slice(i, j).length != 0) {
                // console.log(arr.slice(i,j))
                subArray.push(arr.slice(i, j))
            }
        }
    }
    
    return subArray;
}

function largestSubArray(arr){
    // console.log(arr.length)
    let subArray;
    let largestSubArrayIndex;
    let sum = 0;
    let maxSum = 0;
    for(var i=0;i<arr.length;i++){
        subArray = arr[i];
        // console.log(subArray)
        sum = sumOfArray(subArray);
        if(sum > maxSum){
            maxSum = sum;
            largestSubArrayIndex = i;
        }
        
    }
    console.log("sum ==>",maxSum)
    return arr[largestSubArrayIndex];
}


function sumOfArray(arr) {
    let sum = 0;
  
    // console.log(arr)
    for (var i = 0; i < arr.length; i++) {
        
        sum = sum + arr[i];
    }
    return sum;
}

function main() {
    let  arr = [-1,2,4,-3,5,2,-5,2];
    // let arr = [1, 2, 3, 4]
    console.log("arr ==>",arr)
    let subArray = subArrays(arr);
    // console.log(subArray)
    console.log("Largest subSequence ==>",largestSubArray(subArray))
}
main()