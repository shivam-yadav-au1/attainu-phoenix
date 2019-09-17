

function trappRainWater(arr){

   
    let waterAtBar = 0;
    let totalWater = 0;
    for(let i=0;i<arr.length;i++){
        let higestBarLeft = 0;
        let higestBarRight = 0;
        for(let left=i;left >= 1;left--){
            higestBarLeft = Math.max(higestBarLeft,arr[left]);
        }
        for(let right = i;right < arr.length;right++){
            higestBarRight = Math.max(higestBarRight,arr[right]);
        }
       
        totalWater  += Math.min(higestBarLeft,higestBarRight) - arr[i];
     
    }
    return totalWater;

}

function main(){
    let ans = trappRainWater([0,1,0,2,1,0,1,3,2,1,2,1]);
    console.log(ans);
}

main();