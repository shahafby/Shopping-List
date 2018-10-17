import { SortingKeys } from '../actions/index';
import { SET_SORTING_KEY } from '../actions/index';

export const sortingKeys = (state = SortingKeys.AUTO, action) => {
  switch (action.type) {
    case SET_SORTING_KEY:
      return action.key
    default:
      return state
  }
}
