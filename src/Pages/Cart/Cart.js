import React, { useEffect, useContext, useState } from 'react';
import './Cart.css';
import { NavDark, NavLight } from '../../Components/NavBar/NavBarComponent';
import CartCard from '../../Components/CartCard/CartCardComponent';
import { SiteContext } from '../../data/SiteContext';
import SummaryCard from '../../Components/SummaryCard/SummaryCardComponent';

export default function Cart(props) {
    useEffect(() => {
        if (window.innerWidth > 500) NavDark();
        else NavLight();
    }, [window.innerWidth]);
    const [products, , cart,] = useContext(SiteContext);
    const [pricing, setPricing] = useState(() => { return { price: 0.00, shipping: 0.00 } })
    const CART = cart.cart;
    const CartList = CART.map(id => {
        let pro = products.products.filter(item => {
            if (item._id === id._id) return true
            else return false
        })[0];

        return { ...pro, qty: id.qty };
    });
    useEffect(() => {
        CartList.map(i => {
            setPricing(prev => {
                return { ...prev, price: prev.price+i.price }
            })
        })

    },[cart])
    const CartListElements = CartList.map(item => {
        return <CartCard key={item.id}
            item={item}
        />
    });
    console.log('elements:', CartListElements);
    return (
        <div className='cart-cont'>
            <h1 className='cart-header'>Cart</h1>
            <div className='content-cont'>
                <div className='cart-prod-cont'>
                    {CartListElements}
                </div>
                <div className='cart-summary-cont'>
                    <SummaryCard price={pricing.price.toFixed(2)}
                        shipping={pricing.shipping.toFixed(2) }
                        total={(pricing.shipping + pricing.price).toFixed(2) }
                    />
                </div>
            </div>
        </div>
    );
}