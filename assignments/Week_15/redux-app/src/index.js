import {createStore} from 'redux'

let myReducer = function(state,action){
    // console.log(state,action);
    if(!state){
        // console.log("State initalized");
        return {
            username:'Unknown'
        }
    }
    if(action.type = "DATA_CHANGED"){
        let newState = state;
        newState.username =  action.username;
        return newState;
    }
}

//Redux data store
let store = createStore(myReducer);

// Subscriber function that gets called when data changes

store.subscribe(function(){
    // console.log("Subscriber function called ...");
    let state = store.getState();
    console.log(state);
})

//Dispatch actions
// Let the store knows that we are changing the data.

store.dispatch({
    type:"DATA_CHANGED",
    username:"Ansal"
})
store.dispatch({
    type:"DATA_CHANGED",
    username:"Ravi"
})