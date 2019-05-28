import {createStore} from 'redux';

let counterReducer  = function(state,action){
    if(state === undefined){
        return {counter:0}
    }
    if(action.type === "INCREMENT"){
        let newState = state;
        newState.counter = newState.counter+1;
        return newState;
    }
    if(action.type ==="DECREMENTS" ){
        let newState = state;
        newState.counter = newState.counter -1;
        return newState;
    }
    if(action.type === "RESET"){
        let newState = state;
        newState.counter = newState.counter * 0;
        return newState;
    }
}

let store = createStore(counterReducer);

store.subscribe(function(){
    let state = store.getState();
    console.log("Counter updated .......>",state);
})

store.dispatch({
    type:"INCREMENT"
})

store.dispatch({
    type:"DECREMENTS"
})

store.dispatch({
    type:"RESET"
})