import { combineReducers } from 'redux';
import { ADD_ONE, MINUS_ONE } from '../actions/actions';

const initState = {
    newsLatest: {
        date: '',
        stories: [],
        top_stories: []
    }
};

function lists(state = initState, action) {
    switch (action.type) {
        case ADD_ONE:
            return {
                ...
                {
                    newsLatest: action.payload

                }
            }
        default:
            return state
    }
}

const zhiHuApp = combineReducers({
    lists
});

export default zhiHuApp;