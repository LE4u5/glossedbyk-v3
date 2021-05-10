import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBarComponent.css'

export default function NavBar() {
    
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
                    <NavLink className='nav-link' to='/checkout'> <i className="fas fa-shopping-bag"></i></NavLink>
                </div>
            </div>
        </div>
    );
}

export function NavDark(){
    document.querySelector('.gbk-logo').setAttribute('src', '/assets/svg/logo2.svg');
    document.querySelector('.fa-shopping-bag').classList.add('dark');
    const navLinks = document.querySelectorAll('.nav-link');
    for(var i=navLinks.length; i > 0; i--){
        navLinks[i-1].classList.add('dark');
    }
}
export function NavLight(){
    document.querySelector('.gbk-logo').setAttribute('src', '/assets/svg/logo.svg');
    document.querySelector('.fa-shopping-bag').classList.remove('dark');
    const navLinks = document.querySelectorAll('.nav-link');
    for(var i=navLinks.length; i > 0; i--){
        navLinks[i-1].classList.remove('dark');
    }
}