/*
* action types
*/

export const ADD_ITEM = 'ADD_ITEM';
export const CLEAR_LIST = 'CLEAR_LIST';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SET_SORTING_KEY = 'SET_SORTING_KEY';

/*
* sorting constants 
*/

export const SortingKeys = {
    BY_NAME: 'BY_NAME',
    BY_PRICE: 'BY_PRICE',
    BY_QUANTITY: 'BY_QUANTITY',
    AUTO: 'AUTO'
}

/*
* action creators
*/

let nextItemId = 1;

export const addItem = newItem => ({
    type: ADD_ITEM,
    id: nextItemId++,
    newItem
});

export const removeItem = id => ({
    type: REMOVE_ITEM,
    id
});

export const clearList = () => ({
    type: CLEAR_LIST,
});

export const setSortingKey = key => ({
    type: SET_SORTING_KEY,
    key
});