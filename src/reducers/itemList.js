import { ADD_ITEM, REMOVE_ITEM } from '../actions/index';

export const itemList = (state = [], action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [
                ...state,
                {
                    id: action.id,
                    item: action.item,
                }
            ]
        // case REMOVE_ITEM:
        //     return state.map(item =>
        //         (item.id === action.id)
        //             ? { ...todo, completed: !todo.completed }
        //             : todo
        //     )
        default:
            return state
    }
}
