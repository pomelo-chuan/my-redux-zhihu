export const ADD_ONE = 'ADD_ONE';
export const MINUS_ONE = 'MINUS_ONE';

export function addOne() {
    return {
        type: ADD_ONE
    }
}

export function minusOne() {
    return {
        type: MINUS_ONE
    }
}