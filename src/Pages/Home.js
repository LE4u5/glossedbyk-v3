import React, { useEffect } from 'react';
import Carousel from '../Components/Carousel (FP)/CarouselComponent';
import { NavDark } from '../Components/NavBar/NavBarComponent';
import { Link } from 'react-router-dom';
import './Home.css';
import ProductCard from '../Components/ProductCard/ProductCard';

export default function Home() {
    // useEffect(()=> NavDark(), []);

    return (
        <div className='home-cont'>
            <Carousel images={['./assets/img/main2_16x9.jpg', './assets/img/33A52603-FF73-42FE-9095-70D71585C325.jpg','./assets/img/98AADDD7-C4E1-475A-8472-980909C75FBA.jpg','./assets/img/EyelashandEyebrowGrowthSerum1x1.jpg']} />
            <div className='home-cl-overlay' >
                <img className='lip-gloss-svg text-svg' src='./assets/svg/Lip_Gloss.svg' alt='Lip Gloss' />
                <img className='beauty-svg text-svg' src='./assets/svg/beauty.svg' alt="Beauty" />
                <img className='skin-care-svg text-svg' src='./assets/svg/Skin_Care.svg' alt='Skin Care' />
                <Link to='/'><button className='home-overlay-button' type='button' >Shop Now</button></Link>
            </div>
            <div className='featured-list'>
                <h1 className='featured-header'>Featured</h1>
                <div className='fl-item-cont'>
                    <ProductCard image='./assets/img/products/Baby.jpeg'
                        name='Baby'
                        price='8.00'
                        salePrice='6.00'
                        link={`/store/Baby`} />
                    <ProductCard image='./assets/img/products/Baby.jpeg'
                        name='Baby'
                        price='8.00'
                        salePrice='6.00' 
                        sale={true}
                        link={`/store/Baby`} />
                    <ProductCard image='./assets/img/products/Baby.jpeg'
                        name='Baby'
                        price='8.00'
                        salePrice='6.00'
                        link={`/store/Baby`} />
                    <ProductCard image='./assets/img/products/Baby.jpeg'
                        name='Baby'
                        price='8.00'
                        salePrice='6.00'
                        link={`/store/Baby`} />
                </div>
            </div>
            <div className='cat-list'>

            </div>
        </div>
    )
}