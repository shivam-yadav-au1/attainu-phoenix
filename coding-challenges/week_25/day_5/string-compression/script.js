
function stringCompression(str) {

    let map = new Map();
    for (var i = 0; i < str.length; i++) {
        var count = 0;
        if (!map.has(str.charAt(i))) {
            map.set(str.charAt(i), count + 1);
        } else {
            let frequency = map.get(str.charAt(i));
            map.set(str.charAt(i), frequency + 1);
        }
    }
    var result=""
    for (var [key, value] of map.entries()) {
        result = result +key+value;
    }

    return result;


}

function main() {
    console.log(stringCompression("AAABCCDDDD"));
}

main();