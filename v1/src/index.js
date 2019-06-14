import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './App.css';

import { createStore, combineReducers } from "redux";
import { Provider } from 'react-redux';

const favColorReducer = (state = {
    colorArray: 'asdasd'
}, action) => {
    switch(action.type) {
        case "PUSH_COLOR":
        state = {
            notificationArray: [...state.notificationArray, action.payload]
        };
        break;
        case "POP_COLOR":
        state = {
            notificationArray: [...state.notificationArray, action.payload]
        };
        break;
    }
    return state;
}

const messageReducer = (state = {
    notificationArray: []
}, action) => {
    switch(action.type) {
        case "ADD_NOTIFICATION":
        state = {
            notificationArray: [...state.notificationArray, action.payload]
        };
        break;
        case "REMOVE_NOTIFICATION":
        state = {
            ...state,
            result: state.result - action.payload
        };
        break;
    }
    return state;
}

const store = createStore(combineReducers({favColorReducer, messageReducer}));

// store.subscribe(() => {
//     console.log("Store updated! ", store.getState());
// })

// store.dispatch({
//     type: "ADD",
//     payload: 10
// });


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
