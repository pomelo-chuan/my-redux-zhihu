export const GET_LISTS = 'GET_LISTS';

export function getLists(text) {
    return {
        type: GET_LISTS,
        text
    }
}