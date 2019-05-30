import { createStore } from "redux";

let squareCubeRootReducer = function(oldState,action){
    
    let newState = {
        number:0,
        typedNumber:0,
        answer:0
    }

    if(!oldState){return newState};

    if(action.type === "NUMBER_CHANGED"){
        newState.typedNumber = action.typedNumber;
    }
    if(action.type === "SQUARE"){
        newState.answer = oldState.typedNumber*oldState.typedNumber;
    }
    if(action.type === "SQUARE_ROOT"){
        newState.answer = Math.sqrt(oldState.typedNumber);
    }
    if(action.type === "CUBE"){
        newState.answer =  oldState.typedNumber * oldState.typedNumber * oldState.typedNumber;
    }
    
    
    return newState;
}

let squareCubeRootStore = createStore(squareCubeRootReducer);

squareCubeRootStore.subscribe(function () {
    console.log(squareCubeRootStore.getState());
})

let squareCubeRootMapper = function(state){
    return state;
}

export {squareCubeRootStore,squareCubeRootMapper};
