import { combineReducers } from 'redux';
import { ADD_ONE, MINUS_ONE } from '../actions/actions';

const initState = {
    number: 0
};

function lists(state = initState, action) {
    switch (action.type) {
        case ADD_ONE:
            return {
                number: state.number + 1
            }
        case MINUS_ONE:
            return {
                number: state.number - 1
            }
        default:
            return state
    }
}

const zhiHuApp = combineReducers({
    lists
});

export default zhiHuApp;