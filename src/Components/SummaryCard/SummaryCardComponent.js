import './SummaryCardComponent.css';
import React from 'react';

export default function SummaryCard(props) {
    return (
        <div className='sc-cont'>
            <div className='content-cont'>
                <div className='sc-detail-cont'>
                    <div className='sc-price-detail'><p className=''>Price</p><p className=''>${props.price}</p></div>
                    <div className='sc-shipping-detail'><p className=''>Shipping</p><p className=''> ${props.shipping} </p></div>
                    <div className='sc-total-detail'><p className=''>Total</p><p className=''> ${props.total} </p></div>
                </div>
                <div className='sc-btn-cont'>
                    <button type='button' >Purchase</button>
                </div>
            </div>
        </div>
    );
}