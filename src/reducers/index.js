import { combineReducers } from 'redux'
import { itemList } from './itemList'
import { sortingKey } from './sortingKey'

export default combineReducers({
    itemList,
    sortingKey
})
