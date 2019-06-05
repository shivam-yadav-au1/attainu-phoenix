function squareRootReducer(squareRoot=0,action){
    
    if(action.type === "SQUARE_ROOT"){
        return Math.sqrt(action.number);
    }
    
    return squareRoot;
}

export default squareRootReducer;