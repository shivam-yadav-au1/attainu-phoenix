
function merge(left,right){
  let merged = []
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
    merged = merged.concat(left)
  }
  if(right.length){
    merged = merged.concat(right);
  }
  return merged;
}
 let counter = 0;
function mergeSort(arr) {
 
  if (arr.length === 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0,middle);
  let right = arr.slice(middle,arr.length);
  
  let leftSortedArray = mergeSort(left);
  let rightSortedArray = mergeSort(right);


  return merge(leftSortedArray,rightSortedArray);
}

let arr = [4,8,34,1,0,7,4,24,9];
console.log(mergeSort(arr))

