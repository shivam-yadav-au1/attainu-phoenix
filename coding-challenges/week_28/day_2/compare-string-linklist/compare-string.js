const LinkedList = require('./list.js');


function compareString(str1, str2) {

    if(str1.length != str2.length){
        return false;
    }
    
    let link1 = new LinkedList();
    let link2 = new LinkedList();

    str1.split("").forEach(item => {
        link1.append(item)
    });

    str2.split("").forEach(element => {
        link2.append(element);
    })

    // link2.print();

    let currentNode1 = link1.head;
    let currentNode2 = link2.head;
    let flag;
    
    while (currentNode1 && currentNode2) {

        console.log(currentNode1.value + " " + currentNode2.value)

        if (currentNode1.value === currentNode2.value) {
            flag = true;
        }else{
            flag = false;
        }

        currentNode1 = currentNode1.next;
        currentNode2 = currentNode2.next;

    }
    return flag;

}


function main() {

    let result = compareString("shivam", "shivaj")
    console.log(result)
}

main();