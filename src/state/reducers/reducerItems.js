import * as actionTypes from '../actions/actionTypes';

let initialState = [];

const items = (state = initialState, action = {}) => {

    switch (action.type) {

        case actionTypes.ADD_ITEM:
            return [...state, action.payload];

        case actionTypes.REMOVE_ITEM:
            let index = state.findIndex((item)=> {
                return item.id === action.payload;
            });

            if (index >= 0) {
                return [
                    ...state.slice(0, index),
                    ...state.slice(index + 1)];
            } else {
                return state;
            }

        default:
            return state;
    }

};

export default items;