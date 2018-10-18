import { ADD_ITEM, REMOVE_ITEM, CLEAR_LIST, EDIT_ITEM } from '../actions/index';

const initialState = {
    id: 0,
    item: {
        amount: "4",
        name: "milk",
        price: 4
    }
}

// reducer for list actions
export const itemList = (state = [ initialState ], action = {}) => {
    switch (action.type) {
        case ADD_ITEM:
            return state.concat([{ id: action.id, item: action.newItem }]);

        case CLEAR_LIST:
            return [];

        case REMOVE_ITEM:
            return state.filter(item => item.id !== action.id);

        case EDIT_ITEM:
            let a = state.map(element => {
                if (element.id === action.id) {
                    element.item = action.newItem;
                }
                return element;
            })
            return a;

        default: 
            return state;
    }
}
