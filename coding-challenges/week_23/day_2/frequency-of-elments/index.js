let names = ["Ansal", "Vaibhav", "Divyam", "Vaibhav", "Dwarak"];
let arr = [2, 3, 2, 4, 3, 5, 3];

let map = new Map();
let couter = 0;
arr.forEach((item)=>{
    if(!map.has(item)){
        map.set(item,couter+1)
    }else{
        map.set(item,map.get(item)+1)
    }
    
})


for (var [key, value] of map.entries()) {
    console.log(key + ' = ' + value);
  }