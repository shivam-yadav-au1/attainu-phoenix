import {createStore,combineReducers} from 'redux';
import videoReducers from './reducer/videoReducers.js'

let reducer = combineReducers({
    videos:videoReducers
})

let store = createStore(reducer);

export {store};