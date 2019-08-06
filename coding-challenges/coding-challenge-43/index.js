
function commonElements(a, b) {

        let sortedArr1 = mergeSort(a);
        let sortedArr2 = mergeSort(b);
        console.log(sortedArr1,sortedArr2);

        let common = [];
        let len1 = sortedArr1.length;
        let len2 = sortedArr2.length;
        let i =0,j=0;

        while(i<len1 && j<len2){
            if(sortedArr1[i] < sortedArr2[j]){
                i++;
            }else if(sortedArr2[j] < sortedArr1[i]){
                j++;
            }else{
                console.log(sortedArr2[j])
                common.push(sortedArr2[j]);
                i++;
                j++;
               
                // console.log("lhsdf",sortedArr2[j])
            }

        }
        return common.length;
}

function mergeArray(left,right){

    let merged = [];
    let smallest;
    let common = [];

    while(left.length && right.length){
        
        if(left[0] < right[0]){
            smallest = left.shift();
        }else if(left[0] > right[0]){
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

function mergeSort(arr){

    if(arr.length === 1){
        return arr;
    }
    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0,middle);
    let right = arr.slice(middle,arr.length);

   

    let leftSortedArray = mergeSort(left);
    let rightSortedArray = mergeSort(right);

    return mergeArray(leftSortedArray,rightSortedArray)
}

function main() {
    let a = [5, 2, 8, 9, 4];
    let b = [3, 2, 9, 5];

   let countOfCommonElement =  commonElements(a,b)
   console.log("common  ",countOfCommonElement);
}

main();