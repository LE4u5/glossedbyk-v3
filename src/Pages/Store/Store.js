import './Store.css';
import React, { useEffect, useState, useCallback } from 'react';
import { NavDark } from '../../Components/NavBar/NavBarComponent';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { PRODUCTS } from '../../Data/products';

export default function Store() {
    const [rowSize, setRowSize] = useState(1);
    const [prodList, setProdList] = useState([]);
    //Creats row divs and fills them with *n product cards. *n = rowSize
    const createList = useCallback(() => {
        setProdList(new Array(Math.ceil(PRODUCTS.length / rowSize)).fill('').map((v, i) => {
            let newArray = PRODUCTS.slice(i * rowSize, ((i + 1) * rowSize));
            newArray = newArray.map(pv => {
                return <ProductCard name={pv.name}
                    price={pv.price}
                    sale={pv.sale}
                    key={pv.id}
                    salePrice={pv.sale_price}
                    link={`/store/${pv.name.replace(/ /g, '_')}`}
                    image={pv.image} />
            });
            if (newArray.length < rowSize) {
                for (let a = (rowSize - newArray.length); a > 0; a--) {
                    newArray.push(<div key={10000 + a} className='filler-card' />)
                }
            }
            return <div className='store-row-cont' key={i + 2000}> {newArray} </div>
        }));
    }, [setProdList, rowSize]);
    //Calculates row size based on window width
    const calculateRowSize = useCallback(() => {

        if (window.innerWidth > 1700) {
            if (rowSize !== 5) {
                setRowSize(5);
                console.log('window width: ', window.innerWidth);
            }
        }
        else if (window.innerWidth > 1400) {
            if (rowSize !== 4) {
                setRowSize(4);
                console.log('window width: ', window.innerWidth);
            }
        }
        else if (window.innerWidth > 1100) {
            if (rowSize !== 3) {
                setRowSize(3);
                console.log('window width: ', window.innerWidth);
            }
        }
        else if (window.innerWidth > 450) {
            if (rowSize !== 2) {
                setRowSize(2);
                console.log('window width: ', window.innerWidth);
            }
        } else setRowSize(1);
    }, [rowSize])

    useEffect(() => {
        NavDark();
        window.addEventListener('resize', calculateRowSize);

        return () => {
            window.removeEventListener('resize', calculateRowSize);
        }
    }, [calculateRowSize]);

    useEffect(() => {
        calculateRowSize();
        console.log('Length of products list: ', PRODUCTS.length);
        console.log(`Rows: ${Math.ceil(PRODUCTS.length / rowSize)}. Remainder: ${PRODUCTS.length % rowSize}`)
        createList();
    }, [rowSize, createList, calculateRowSize]);

    console.log('Row size: ', rowSize);

    return (
        <div className='store-cont'>
            <h1 className='store-header'>Products</h1>
            <div className='store-prod-cont'>
                {prodList}
            </div>
        </div>
    );
}