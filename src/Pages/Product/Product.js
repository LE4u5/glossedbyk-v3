import './Product.css';
import React, { useEffect, useState, useCallback, useContext } from 'react';
//import { PRODUCTS } from '../../data/products';
import { NavDark } from '../../Components/NavBar/NavBarComponent';
import { SiteContext } from '../../data/SiteContext';
import { addToCart } from '../../data/ActionCreators';

export default function Product(props) {
    useEffect(() => { NavDark() }, []);
    const [products, , cart, cartDispatch] = useContext(SiteContext);
    const PRODUCTS = products.products;
    const [name] = useState(props.match.params.SelectedItem.replace(/_/g, ' '));
    const [optionList, setOptionList] = useState({ list: [], visible: false, selectedOption: '' });
    const [productData, setProductData] = useState({ price: 0, image: '', qty: 1 });

    useEffect(() => {
        setProductData(o => {
            return {
                ...o,
                ...PRODUCTS.filter(a => a.name === name)[0], image: PRODUCTS.filter(a => a.name === name)[0].image.map((a, i) => {
                    return <img src={a} key={i + 100} alt={i} />
                })
            };
        })
    }, [setProductData, name, PRODUCTS]);
    useEffect(() => {
        if (document.querySelector('.product-selected-option'))
            document.querySelector('.product-selected-option').innerHTML = 'Select One'
    }, [])
    const selectOption = useCallback((newOption) => {
        if (document.querySelector('.product-selected-option')) {
            document.querySelector('.product-selected-option').innerHTML = newOption;
            setOptionList(o => { return { ...o, selectedOption: newOption } })
        }
    }, []);
    
    useEffect(() => {
        if (productData.options) {
            setOptionList(o => {
                return {
                    ...o, list: productData.options.map((option, index) => {
                        return <p className='product-option-list-item' onClick={() => selectOption(option)} key={index}>{option}</p>
                    })
                }
            })
        }
    }, [setOptionList, selectOption, productData.options]);

    const toggleOptionList = () => {
        const optionListCont = document.querySelector('.product-option-list-cont');
        if (optionList.visible === false) {
            optionListCont.classList.add('active');
        } else if (optionList.visible === true) {
            optionListCont.classList.remove('active');
        }
        setOptionList(o => { return { ...o, visible: !o.visible } });
    }

    const incrementQty = () => {
        setProductData({ ...productData, qty: productData.qty + 1 })
        console.log('incrementing: ', productData.qty + 1)
    }
    const decrementQty = () => {
        setProductData({ ...productData, qty: productData.qty - 1 })
        console.log('incrementing: ', productData.qty - 1)
    }

    return (
        <div className='product-cont' >

            <div className='product-image-cont'>
                {productData.image}
            </div>
            <div className='product-info-cont'>
                <h1 className='product-header'> {name} </h1>
                <div className='product-price-cont'>{productData.sale ? <p className='product-salep-text'><strike>${productData.price} </strike> ${productData.sale_price.toFixed(2)} </p> : <p className='product-price-text'>${productData.price.toFixed(2)} </p>}</div>
                {optionList.list.length > 0 ? <div className='product-options-cont'>
                    <p>Options: </p>
                    <p className='product-selected-option'>Selected Option</p>
                    <div className='product-option-chev-cont' onClick={() => toggleOptionList()}>
                        <img className='product-option-chev dropdown' src='/assets/svg/down_chev.svg' alt='v' />
                        <div className='product-option-list-cont' >
                            {optionList.list}
                        </div>
                    </div>
                </div> : <div />}
                <div className='product-qty-cont'>
                    <p>Qty:</p>
                    <p className='product-selected-qty'>{productData.qty}</p>
                    <img className='product-option-chev up' src='/assets/svg/up_chev.svg' alt='v' onClick={() => { incrementQty() }} />
                    <img className='product-option-chev down' src='/assets/svg/down_chev.svg' alt='v' onClick={() => { decrementQty() }} />
                </div>
                <div className='product-btn-cont'>
                    <input className='product-btn' type='button' value='Add to Cart' onClick={() => {
                        cartDispatch(addToCart({_id:productData._id, qty:productData.qty}));
                        console.log('added item to cart', cart);
                    }} />
                </div>
                <div className='product-desc-cont'>
                    <p>Description: <span className='product-desc-span'> {productData.description}</span></p>
                </div>
                <div className='product-share-cont'>
                    <p>Share:</p>
                    <i className="fab fa-instagram fa-lg"></i>
                </div>
            </div>
        </div>
    );
}