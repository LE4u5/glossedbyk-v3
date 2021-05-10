import React, {useEffect} from 'react';
import './Cart.css';
import {NavDark} from '../../Components/NavBar/NavBarComponent';

export default function Cart(props){
    useEffect(()=>{NavDark()},[])
    return (
        <div className='cart-cont'>
            <h1 className='cart-header'>Cart</h1>
            <div className='cart-prod-cont'>
                
            </div>
        </div>
    );
}