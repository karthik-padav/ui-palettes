import { createStore, combineReducers } from "redux";
// import { statement } from "@babel/template";

const favColorReducer = (state = {
    favColorArray: JSON.parse(localStorage.getItem('colorList'))
        ?
        JSON.parse(localStorage.getItem('colorList'))
        :
        []
}, action) => {
    switch (action.type) {
        case "PUSH_COLOR":
            state = {
                favColorArray: [...state.favColorArray, action.payload]
            };
            localStorage.setItem('colorList', JSON.stringify(state.favColorArray));
            break;
        case "POP_COLOR":
            let index = state.favColorArray.indexOf(action.payload);
            if (index !== -1) {
                state.favColorArray.splice(index, 1);
                state = {
                    favColorArray: state.favColorArray
                };
                localStorage.setItem('colorList', JSON.stringify(state.favColorArray));
            }

            break;
        default: return state
    }
    return state;
}

const toasMessageReducer = (state = {
    toastMsgArray: []
}, action) => {
    switch (action.type) {
        case "SHOW_TOAST_MSG":
            if (state.toastMsgArray.indexOf(action.payload) < 0) {
                console.log('not present');
                state = {
                    toastMsgArray: [...state.toastMsgArray, action.payload]
                };
            }
            break;
        case "HIDE_TOAST_MSG":
            state.toastMsgArray.pop();
            state = {
                toastMsgArray: [...state.toastMsgArray]
            };
            break;

        default: return state
    }
    return state;
}

const loaderReducer = (state = {
    isLoading: false
}, action) => {
    switch (action.type) {
        case 'IS_LOADING':
            state = {
                isLoading: action.payload
            }
            break;
        default: return state
    }
    return state;
}

export const store = createStore(combineReducers({ favColorReducer, toasMessageReducer, loaderReducer }));