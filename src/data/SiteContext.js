import React, { createContext, useReducer } from 'react';
import ProductReducer from './ProductReducer';
import CartReducer from './CartReducer';

export const SiteContext = createContext();

export function SiteProvider(props) {
    const [products, productsDispatch] = useReducer(ProductReducer, {products: [] });
    const [cart, cartDispatch] = useReducer(CartReducer, { update: true, cart: [] });
    return (
        <SiteContext.Provider value={[ products, productsDispatch, cart, cartDispatch ]} >
            {props.children}
        </SiteContext.Provider>
    );
}