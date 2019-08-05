const fs = require('fs');


function readFile(fileName, callBackFun) {
    let csvDataObject = {}
    let dataArray = []
    fs.readFile(fileName, "utf-8", (error, data) => {
        if (error) {
            console.log(data);
            return;
        }
        data = data.split("\n");
        data.forEach((line, index) => {
            var words = line.split(",")
            console.log(words[0],words[1])
            csvDataObject = {
                state: words[0],
                percentage: words[1]
            }
            // console.log(csvDataObject)
            dataArray.push(csvDataObject);
            callBackFun(dataArray);

        })
    })

    
}

function sortData(data) {
    // console.log("sortData ==called ")
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data.length - i; j++) {
            console.log(data[i].percentage)
            if (data[j + 1] === undefined) {
                
            } else {
                if (data[j].percentage < data[j + 1].percentage) {
                    let temp = data[j];
                    data[j] = data[j + 1];
                    data[j + 1] = temp;
                }
            }

        }
    }
    console.log("====After sorting ======")
    console.log(data);
   
}
 readFile("computers-datafile.csv", sortData);

