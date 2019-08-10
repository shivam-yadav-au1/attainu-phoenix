function setNUmberReducer(number=0,action){
    if(action.type === "SET_NUMBERS"){
        return action.number;
    }
    
    return number;
}
export default setNUmberReducer