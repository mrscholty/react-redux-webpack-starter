import * as actionTypes from './actionTypes';

export function addItem(item) {
    return {
        type: actionTypes.ADD_ITEM,
        payload: item
    }
}

export function removeItem(id) {
    return {
        type: actionTypes.REMOVE_ITEM,
        payload: id
    }
}