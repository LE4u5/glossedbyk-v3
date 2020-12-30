import './Product.css';
import React, { useEffect, useState, useCallback } from 'react';
import { PRODUCTS } from '../../Data/products';
import { NavDark } from '../../Components/NavBar/NavBarComponent';

export default function Product(props) {
    useEffect(() => { NavDark() }, []);
    const [optionList, setOptionList] = useState([]);
    const [imageListph, setImageList] = useState([]);
    const name = props.match.params.SelectedItem.replace(/_/g, ' ')
    const product = PRODUCTS.filter(a => a.name === name)[0];
    let imageList = product.image.map((a, i) => {
        return <img src={a} key={i + 100} alt={i} />
    });
    useEffect(()=> {
        document.querySelector('.product-selected-option').innerHTML = product.options[0]
    },[product])
    const selectOption = useCallback((newOption) => {
        document.querySelector('.product-selected-option').innerHTML = newOption;
    }, []);

    useEffect(() => {
        if (product.options) {
            setOptionList(product.options.map((option, index) => {
                return <p className='product-option-list-item' onClick={() => selectOption(option)} key={index}>{option}</p>
            }))
        }
    }, [setOptionList, selectOption, product.options]);

    imageList.push(<img src={product.image[0]} key={103} alt={product.name} />);

    console.log(product.image);
    console.log(imageList);
    return (
        <div className='product-cont' >

            <div className='product-image-cont'>
                {imageList}
            </div>
            <div className='product-info-cont'>
                <h1 className='product-header'> {name} </h1>
                <div className='product-price-cont'>{product.sale ? <p className='product-salep-text'><strike>${product.price} </strike> ${product.sale_price.toFixed(2)} </p> : <p className='product-price-text'>${product.price.toFixed(2)} </p>}</div>
                <div className='product-options-cont'><p>Options: </p><p className='product-selected-option'>Selected Option</p><img className='product-option-chev' src='/assets/svg/down_chev.svg' alt='v' />
                    <div className='product-option-list-cont' >
                        {optionList}
                    </div>
                </div>

                <button className='product-btn' type='button' >Add to Cart</button>
            </div>
        </div>
    );
}