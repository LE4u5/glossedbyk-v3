import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';

export default function ProductCard(props) {


    return (
        <div className='product-card-cont'>
            <Link className='pc-link' to={`/store/${props.name}`}>
                <div className='pc-img-cont'>
                    <img className='pc-img' src={props.image} alt={props.name} />
                </div>
                <div className='pc-text-cont'>
                    <p className='pc-text-name'> {props.name} </p>
                    <p className='pc-text-price'> ${props.price} </p>
                    <p className='pc-text-sale pc-disable'> ${props.salePrice} </p>
                </div>
            </Link>
        </div>
    );
}