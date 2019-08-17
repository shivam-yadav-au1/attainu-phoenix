const fs = require('fs');
const PriorityQueue = require("./heap.js");


function putDataInPriorityQueue(fileName, callback) {
    let pq;
    fs.readFile(fileName, "utf-8", (error, data) => {
        if (error) {
            console.log(error);
            return;
        }
        data = data.split("\n");

        pq = new PriorityQueue();
        data.forEach((line, index) => {
            var word = line.split(",");
            pq.add(word[0], word[1]);
        })
        callback(pq);
    })


}

function printHasTable(pq) {
    pq.print();
}

function main() {
    putDataInPriorityQueue("computers-datafile.csv", printHasTable);
}

main();