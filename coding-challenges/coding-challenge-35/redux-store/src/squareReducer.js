function squareReducer(square=0,action){

    if(action.type === "SQUARE"){
        return action.number * action.number
    }
    return square

}

export default squareReducer