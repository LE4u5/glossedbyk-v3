import React from "react";
import './CartCardComponent.css';

export default function CartCardComponent(props) {
    console.log('card price: ', props.item.qty*props.item.price)
    return (
        <div className="cart-card-cont">
            <img className='cart-card-img' src={props.item.image[0]} alt={props.item.name} />
            <div className='cart-card-info-cont'>
                <div className='cart-card-row one '>
                    <div className='cart-card-col'>
                        <p>Item</p>
                    </div>
                    <div className='cart-card-col'>
                        <p>Quantity</p>
                    </div>
                    <div className='cart-card-col'>
                        <p>Price</p>
                    </div>
                </div>
                <div className='cart-card-row two'>
                    <div className='cart-card-col'>{props.item.name}</div>
                    <div className='cart-card-col'>{props.item.qty}</div>
                    <div className='cart-card-col'>{(props.item.qty*props.item.price).toFixed(2)}</div>
                </div>
            </div>
        </div>
    );
}