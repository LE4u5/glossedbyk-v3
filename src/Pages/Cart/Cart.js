import React, { useEffect, useContext } from 'react';
import './Cart.css';
import { NavDark } from '../../Components/NavBar/NavBarComponent';
import CartCard from '../../Components/CartCard/CartCardComponent';
import { SiteContext } from '../../data/SiteContext';
import SummaryCard from '../../Components/SummaryCard/SummaryCardComponent';

export default function Cart(props) {
    useEffect(() => { NavDark() }, []);
    const [products, , cart,] = useContext(SiteContext);
    const CART = cart.cart;
    const CartList = CART.map(id => {
        let pro = products.products.filter(item => {
            if (item._id === id._id) return true
            else return false
        })[0];

        return {...pro, qty: id.qty};
    });

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
                    <SummaryCard />
                </div>
            </div>
        </div>
    );
}