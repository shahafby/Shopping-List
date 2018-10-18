import { SortingKeys } from '../actions/index';
import { SET_SORTING_KEY } from '../actions/index';

// reducer for sorting actions
export const sortingKey = (state = SortingKeys.AUTO, action) => {
  switch (action.type) {
    case SET_SORTING_KEY:
      return action.key
  
      default:
      return state
  }
}
