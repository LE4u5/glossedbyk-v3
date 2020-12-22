import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';

export default function ProductCard(props) {
    const display = props.sale ? '':'pc-disable';

    return (
        <div className='product-card-cont'>
            <Link className='pc-link' to={props.link}>
                <div className='pc-img-cont'>
                    <img className='pc-img' src={props.image} alt={props.name} />
                    <i className={`fas fa-tag fa-2x ${display}`} ></i>
                </div>
                <div className='pc-text-cont'>
                    <p className='pc-text-name'> {props.name} </p>
                    <div className='pc-price-cont'>
                        {props.sale ? <strike className='pc-text-price'> ${props.price} </strike>:<p className='pc-text-price'> ${props.price} </p>}
                        <p className={`pc-text-sale ${display}`}> ${props.salePrice} </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}