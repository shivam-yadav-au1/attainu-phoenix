
function isUnique(string){

    var s = new Set();
    for(var i =0;i<string.length;i++){
        s.add(string.charAt(i));
    }
    return s.size === string.length ? true :false;
}

function main(){
    var result =  isUnique("arkesh");
    console.log(result);
}

main();