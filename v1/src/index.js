import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './App.css';

import { createStore } from "redux";

const initalState = {
    result: 1,
    latestValue: []
}

const reducer = (state = initalState, action) => {
    switch(action.type) {
        case "ADD":
        state = state + action.payload;
        break;
        case "SUBTRACT":
        state = state - action.payload;
        break;
    }
    return state;
}

const store = createStore(reducer);

store.subscribe(() => {
    console.log("Store updated! ", store.getState());
})

store.dispatch({
    type: "ADD",
    payload: 10
});


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
