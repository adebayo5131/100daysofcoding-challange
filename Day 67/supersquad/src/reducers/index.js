import {combineReducers} from 'redux';

import characters from './character_reducers';
import heroes from './heroes_reducers';


const rootReducer = combineReducers({
    characters,
    heroes
})
export default rootReducer;