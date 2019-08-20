function mergeArray(a, b) {

    let merged = [];
    while (a.length && b.length) {
        let smalllest;
        if (a[0] < b[0]) {
            smallest = a.shift();
        } else {
            smallest = b.shift();
        }
        merged.push(smallest)

    }
    if (a.length) {
        merged = merged.concat(a);
    }
    if (b.length) {
        merged = merged.concat(b);
    }
    return merged;


}

function main() {
    let a = [4, 8, 56, 23, 9, 66];
    let b = [6, 2, 0, 1, 13, 4];
    console.log(a,b)
    let outPut = mergeArray(a, b);
    console.log(outPut);
}

main();