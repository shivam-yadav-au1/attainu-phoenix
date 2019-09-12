/**
 * @param {number} n
 * @return {string[]}
 */

var generate = function(index,n,open,close,output,str){
    // console.log("generate called ...")
    //Base condition
    if(index === 2*n){
        output.push(str);
        return;
    }
    //recursive conditon
    if(open < n){
        str = str.concat('(');
        generate(index+1,n,open+1,close,output,str);
    }
    if(close < open){
        str = str.concat(')');
        generate(index+1,n,open,close+1,output,str);
    }
}

var generateParenthesis = function(n) {
    // console.log("generatePaenthesis called ....")
    let output = [];
    generate(0,n,0,0,output,"");
    console.log(output);
    return output;
    
    
};

generateParenthesis(2);
