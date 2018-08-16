import React from 'react';

import ReactDOM from 'react-dom'

import App from './components/App'

import {createStore} from 'redux';
/* Provider component to specify store */
import {Provider} from 'react-redux'

/* setting up stores */

import rootReducers from './reducers'
import {addCharacterById} from './actions';

const store = createStore(rootReducers);
console.log('store.getstate()', store.getState())
store.subscribe(() => console.log('store', store.getState()))
store.dispatch(addCharacterById(1));

ReactDOM.render(
   <Provider store = {store}>
        <App />
   </Provider>, document.getElementById('root')
    
)