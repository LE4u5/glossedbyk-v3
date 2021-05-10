import React, {useEffect} from 'react';
import './Checkout.css';
import {NavDark} from '../../Components/NavBar/NavBarComponent';
import SummaryCard from '../../Components/SummaryCard/SummaryCardComponent';

export default function Checkout(props){
    useEffect(()=>{NavDark()},[])
    return (
        <div className='checkout-cont'>
            <div className='checkout-list-cont'>
            <h1 className='checkout-header'>Checkout</h1>
                <div className='cont'>
                    <div className='address-cont'>
                        <div className='address-header-cont'><h2>Shipping Address</h2></div>
                        <div className='address-info-cont'>
                            <form>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='checkout-summary-cont'>
            <h1 className='checkout-header'>Summary</h1>
                <SummaryCard price={0.00.toFixed(2)}
                    shipping={0.00.toFixed(2)}
                    total={0.00.toFixed(2)} />
            </div>
        </div>
    );
}