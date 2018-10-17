import { combineReducers } from 'redux'
import { itemList } from './itemList'
import { sortingKeys } from './sortingKeys'

export default combineReducers({
    itemList,
    sortingKeys
})
