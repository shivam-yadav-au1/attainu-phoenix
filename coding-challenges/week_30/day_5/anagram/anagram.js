// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],

function anagrams(arr) {

    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].split("").sort().join("");
        if (!map.has(word)) {
            map.set(word, []);
        }

    }
 
    arr.forEach((item) => {

        let anagram = item.split("").sort().join("");
      
        if(map.has(anagram)){
            let arr = map.get(anagram);
            arr.push(item);
        }
    })

    let finalArray = []
    map.forEach((item,key)=>{
       finalArray.push(item)
    })
    return finalArray;
}

function main() {
    let arr = ["eat", "tea", "tan", "ate", "nat", "bat"]
    let result =   anagrams(arr);
    console.log(result)
 
}

main();