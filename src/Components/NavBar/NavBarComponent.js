import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBarComponent.css'
import { SiteContext } from '../../data/SiteContext';
export default function NavBar() {
    const [, , cart,] = useContext(SiteContext);
    const [cartTotal, setCartTotal] = useState(() => 0);
    
    const getCartTotal = () => {
        cart.cart.forEach((element, index) => {
            if (index === 0) {
                setCartTotal(element.qty);
                return;
            }
            setCartTotal(cartTotal + element.qty);
        });
        
    }

    useEffect(getCartTotal, [cart]);

    return (
        <div className='nav-cont'>
            <div className='item-cont-left'>
                <div className='logo-cont' >
                    <img className='gbk-logo' src='/assets/svg/logo.svg' alt='GlossedByK' />
                </div>
            </div>
            <div className='item-cont-right'>
                <div className='nav-link-list-cont'>
                    <NavLink className='nav-link' to='/'>Home</NavLink>
                    <NavLink className='nav-link' to='/store'>Store</NavLink>
                </div>
                <div className='nav-cart-cont'>
                    <NavLink className='nav-link' to='/cart'> <i className="fas fa-shopping-bag">{cartTotal}</i></NavLink>
                </div>
            </div>
        </div>
    );
}

export function NavDark() {
    document.querySelector('.gbk-logo').setAttribute('src', '/assets/svg/logo2.svg');
    document.querySelector('.fa-shopping-bag').classList.add('dark');
    const navLinks = document.querySelectorAll('.nav-link');
    for (var i = navLinks.length; i > 0; i--) {
        navLinks[i - 1].classList.add('dark');
    }
}
export function NavLight() {
    document.querySelector('.gbk-logo').setAttribute('src', '/assets/svg/logo.svg');
    document.querySelector('.fa-shopping-bag').classList.remove('dark');
    const navLinks = document.querySelectorAll('.nav-link');
    for (var i = navLinks.length; i > 0; i--) {
        navLinks[i - 1].classList.remove('dark');
    }
}