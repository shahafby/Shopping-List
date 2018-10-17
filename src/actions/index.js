/*
* action types
*/

export const ADD_ITEM = 'ADD_ITEM';
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

let currentItemId = 0;

export const addItem = newItem => ({
    type: ADD_ITEM,
    id: currentItemId++,
    newItem
});

export const removeItem = id => ({
    type: REMOVE_ITEM,
    id
});

export const setSortingKey = key => ({
    type: SET_SORTING_KEY,
    key
});