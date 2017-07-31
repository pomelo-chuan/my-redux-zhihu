import { fetchNewsLatest } from '../services/services';

export const ADD_ONE = 'ADD_ONE';
export const MINUS_ONE = 'MINUS_ONE';

export async function addOne() {
    const response = await fetchNewsLatest();
    return {
        type: ADD_ONE,
        payload: response.data
    }
}
