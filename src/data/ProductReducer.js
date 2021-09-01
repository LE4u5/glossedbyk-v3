import * as ActionTypes from './ActionTypes';

export default function ProductReducer(state, action) {
    switch (action.type) {
        case ActionTypes.GET_PRODUCTS:
            return { ...state, isLoading: false, products: action.payload, cat_list: RemoveDup(action.payload) }
        case ActionTypes.LOADING_PRODUCTS:
            return { ...state, isLoading: true }
        default:
            return state;
    }
}

function RemoveDup(list) {
    const newList = list.map(item => item.type);

    const uniqueList = [...new Set(newList)];
    return uniqueList;
}