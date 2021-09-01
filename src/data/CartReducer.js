import * as ActionTypes from './ActionTypes';

export default function CartReducer(state, action) {
    var _includes;
    var cartUpdateQty;
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            _includes = false;
            cartUpdateQty = state.cart.map(item => {
                if (item._id === action.payload._id) {
                    _includes = true;
                    return { ...item, qty: item.qty++ }
                } else return item;
            })
            if (_includes)
                return { ...state, cart: cartUpdateQty };
            else
                return { ...state, cart: [...state.cart, action.payload] }
        case ActionTypes.REMOVE_FROM_CART:
            return { ...state, cart: state.cart.filter(item => item._id !== action.payload._id) }
        case ActionTypes.EMPTY_CART:
            return { ...state, cart: [] };
        case ActionTypes.REMOVE_FROM_CART_QTY:
            _includes = false;
            cartUpdateQty = state.cart.map(item => {
                if (item._id === action.payload._id) {
                    _includes = true;
                    if (item.qty > 0)
                        return { ...item, qty: item.qty-- }
                }
                return item;
            })

            cartUpdateQty = cartUpdateQty.filter(item => item.qty > 0);
            return { ...state, cart: cartUpdateQty };

        default:
            return state;
    }
}