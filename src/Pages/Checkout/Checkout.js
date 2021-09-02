import React, { useEffect } from 'react';
import './Checkout.css';
import { NavDark } from '../../Components/NavBar/NavBarComponent';
import SummaryCard from '../../Components/SummaryCard/SummaryCardComponent';

export default function Checkout(props) {
    const shipping = document.querySelector('.address-cont');
    useEffect(() => { NavDark() }, [])
    
    const extendToggle = element => {
        if (element.classList.contains('extend')) {
            element.classList.remove('extend');
        }else element.classList.add('extend');
    }
    return (
        <div className='checkout-cont'>
            <div className='checkout-list-cont'>
                <h1 className='checkout-header'>Checkout</h1>
                <div className='cont'>
                    <div className='address-cont info-cont extend'>
                        <div className='address-header-cont' onClick={() => extendToggle(shipping)}><h2>Shipping Address</h2></div>
                        <div className='address-info-cont'>
                            <form>
                                <label for="c-name" >Name</label>
                                <input name="c-name" id="c-name" type='text'></input>

                                <label for="c-address1" >Address 1</label>
                                <input name="c-address1" id="c-address1" type='text'></input>
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