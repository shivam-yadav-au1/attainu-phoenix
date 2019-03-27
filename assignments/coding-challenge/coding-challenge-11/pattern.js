var pattern = function (num) {

    var pattern = ""
    for (var i = 1; i < num; i++) {
       
        for (var j = 1; j <i; j++) {
            pattern = pattern + "*"
            // console.log(i+" "+j)
            console.log(pattern)
        }

    }
  
   
    for (var i = num; i >= 1; i--) {
        pattern = ""
        for(var j=1;j<=i;j++){
           pattern = pattern + "*"
        }
        console.log(pattern)
        
    }


}
pattern(5)