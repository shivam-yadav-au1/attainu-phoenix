'use strict'

const isOdd = (number)=>{
    if(number % 2 === 0){
        return false;
    }
    else{
        return true;
    }
}

const isEven = (number)=>{
    if(number % 2 === 0){
        return true;
    }else{
       return  false;
    }
}


function main(){
    var numberSequence = [];
    var nextNumber = 1;
    numberSequence.push(1);
    for(var num=1;num<1000000;num++){
        
        if(isOdd(nextNumber)){
            nextNumber = 3 * nextNumber +1;    
      
        }else{
            nextNumber = Math.floor(nextNumber / 2);
          
        }
        console.log(nextNumber);
    }
}
main();