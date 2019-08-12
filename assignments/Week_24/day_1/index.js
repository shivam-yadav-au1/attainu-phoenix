const fs = require('fs');

function readFile(fileName, callBack) {
    let dataArray = [];
    let csvData = {};
    fs.readFile(fileName, "utf-8", (error, data) => {
        if (error) {
            console.log(error);
            return;
        }
        data = data.split("\n");
        data.forEach((line, index) => {
            var words = line.split(",");
            csvData = {
                state: words[0],
                percentage: words[1]
            }
            dataArray.push(csvData);
        })
        callBack(dataArray);
    });
}

function mergeArrays(left, right) {
    let merged = [];

    while (left.length && right.length) {
        let smallest;
        if (left[0].percentage < right[0].percentage) {
            smallest = left.shift();
        } else {
            smallest = right.shift();
        }
        merged.push(smallest);
    }

    if (left.length) {
        merged = merged.concat(left);
    }
    if (right.length) {
        merged = merged.concat(right);
    }

    return merged;
}

function mergeSort(err, data) {
    if (err) {
        console.log(err)
        return;
    }


    if (data.length === 1) {
        return data;
    }
    let middle = Math.floor(data.length / 2);
    let left = data.slice(0, middle);
    let right = data.slice(middle, data.length);

    let leftSortedArray = mergeSort(left);
    let rightSortedArray = mergeSort(right);

    return mergeArrays(leftSortedArray, rightSortedArray);
}


function main() {
    readFile("computers-datafile.csv", mergeSort);
    //    console.log("line 82",sortedData)
}

main();