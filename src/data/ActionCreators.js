import * as ActionTypes from './ActionTypes';

export const getProducts = products => ({
    type: ActionTypes.GET_PRODUCTS,
    payload: products
})

export const fetchProducts = async (dispatch) => {
    try {
        const resp = await fetch('https://affectionate-payne-50789b.netlify.app/.netlify/functions/api', { header: { 'Content-Type': 'application/json' } });
        const items = await resp.json();
        const newItems = items.sort((a, b) => a.id - b.id);
        dispatch(getProducts(newItems));
    }
    catch (err) {
        console.log('Failed');
    }
}

export const addToCart = product => {
    console.log('Action creator adding:',product)
    return ({
        type: ActionTypes.ADD_TO_CART,
        payload: product
    })
}

export const removeFromCart = product => ({
    type: ActionTypes.REMOVE_FROM_CART,
    payload: product
})

export const removeFromCartQty = product => ({
    type: ActionTypes.REMOVE_FROM_CART_QTY,
    payload: product
})

export const emptyCart = () => ({
    type: ActionTypes.EMPTY_CART
})