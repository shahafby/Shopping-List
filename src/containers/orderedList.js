import { connect } from 'react-redux'
import { removeItem, clearList, setSortingKey, editItem } from '../actions'
import { List } from '../components/body/list/List'
import { SortingKeys } from '../actions'

// internal function to compare item values
const compareValues = (key, order = 'asc') => {
    return function (itemA, itemB) {
        const propertyA = (typeof itemA.item[key] === 'string') ? itemA.item[key].toUpperCase() : itemA.item[key];
        const propertyB = (typeof itemB.item[key] === 'string') ? itemB.item[key].toUpperCase() : itemB.item[key];
        let comparison = 0;
        if (propertyA > propertyB) {
            comparison = 1;
        } else if (propertyA < propertyB) {
            comparison = -1;
        }
        return (
            (order === 'desc') ? (comparison * -1) : comparison
        );
    };
}

// internal function to sort item list (uses comparValues func)
const sortListByKey = (state) => {
    let list = state.itemList;
    if (state.sortingKey !== SortingKeys.AUTO) {
        let key;
        switch (state.sortingKey) {
            case SortingKeys.BY_NAME:
                key = 'name';
                break;

            case SortingKeys.BY_PRICE:
                key = 'price';
                break;

            case SortingKeys.BY_QUANTITY:
                key = 'amount';
                break;

            default:
                break;
        }
        list.sort(compareValues(key))
    }
    return list;
}

const mapStateToProps = state => {
    return {
        list: sortListByKey(state),
        sortingKey: state.sortingKey
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClearList: () => {
            dispatch(clearList())
        },
        onRemoveItem: (id) => {
            dispatch(removeItem(id))
        },
        onSetSortKey: (key) => {
            dispatch(setSortingKey(key))
        },
        onEditItem: (id, newItem) => {
            dispatch(editItem(id, newItem))
        }
    }
}

export const OrderedList = connect(
    mapStateToProps,
    mapDispatchToProps
)(List);