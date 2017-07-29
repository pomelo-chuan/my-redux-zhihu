import { combineReducers } from 'redux';

function lists(state = [], action) {
    switch (action.type) {
        case GET_LISTS:
            return [
                ...state,
                {
                    text: action.text
                }
            ]
        default:
            return state
    }
}

const zhiHuApp = combineReducers({
    lists
});

export default zhiHuApp;