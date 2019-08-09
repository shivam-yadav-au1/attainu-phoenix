import { createStore } from 'redux';
import { combineReducers } from 'redux'
import squareReducer from './squareReducer.js'
import setNUmberReducer from './setNumberReducer.js';
import squareRootReducer from './squareRoot.js';


let reducer = combineReducers({
    isSquare: squareReducer,
    isSetNumber: setNUmberReducer,
    isSquareRoot: squareRootReducer,
   
})

let store = createStore(reducer)

store.subscribe(function () {
    console.log(store.getState());
});

function storeMapper(state) {
    return state;
}

store.dispatch({
    type: 'SET_NUMBERS',
    number:5
});

store.dispatch({
    type: 'SQUARE',
    number:5
});
store.dispatch({
    type: 'SQUARE_ROOT',
    number:5
});

export { store, storeMapper }