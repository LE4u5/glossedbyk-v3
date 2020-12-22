import React, { useEffect } from 'react';
import Carousel from '../Components/Carousel (FP)/CarouselComponent';
import { NavDark } from '../Components/NavBar/NavBarComponent';
import { Link } from 'react-router-dom';
import './Home.css';
import ProductCard from '../Components/ProductCard/ProductCard';

export default function Home() {
    // useEffect(()=> NavDark(), []);
    const featured = ['','','',''].map(a => <ProductCard image='./assets/img/products/Baby.jpeg'
    name='Baby'
    price='8.00'
    salePrice='6.00'
    link={`/store/Baby`} />)

    return (
        <div className='home-cont'>
            <Carousel images={['./assets/img/main2_16x9.jpg', './assets/img/33A52603-FF73-42FE-9095-70D71585C325.jpg', './assets/img/98AADDD7-C4E1-475A-8472-980909C75FBA.jpg', './assets/img/EyelashandEyebrowGrowthSerum1x1.jpg']} />
            <div className='home-cl-overlay' >
                <img className='lip-gloss-svg text-svg' src='./assets/svg/Lip_Gloss.svg' alt='Lip Gloss' />
                <img className='beauty-svg text-svg' src='./assets/svg/beauty.svg' alt="Beauty" />
                <img className='skin-care-svg text-svg' src='./assets/svg/Skin_Care.svg' alt='Skin Care' />
                <Link to='/'><button className='home-overlay-button' type='button' >Shop Now</button></Link>
            </div>
            <div className='featured-list'>
                <h1 className='featured-header'>Featured</h1>
                <div className='fl-item-cont'>
                    {featured}
                </div>
            </div>
            <div className='cat-list'>
                <div className='cat-display-cont' >
                    <CatagoryCard cat='Lip Oil' image='./assets/img/products/RosePetalLipOil1x1.jpg' />
                    <CatagoryCard cat='Lip Balm' image='./assets/img/products/StrawberryLipBalm1x1.jpg' />
                    <CatagoryCard cat='Skin Care' image='./assets/img/products/Rose and Lavender Spray1x1.jpg' />
                </div>
                <div className='cat-display-cont' >
                    <CatagoryCard cat='Growth Serum' image='./assets/img/products/RoseNailOilTwistPen1x1.jpg' />
                    <CatagoryCard cat='Bath & Body' image='./assets/img/products/VanillaRoseFace&BodyScrub1x1.jpg' />
                    <CatagoryCard cat='Other' image='./assets/img/products/MiniHandSanitizers1x1.jpg' />
                </div>
            </div>
        </div>
    )
}

function CatagoryCard(props) {
    return (
        <div className='cat-card-cont'>
            <div className='cat-overlay' />
            <img className='cat-img' src={props.image} alt={props.cat} />
            <div className='cat-title-cont'>
                <h1 className='cat-title'> {props.cat} </h1>
            </div>
            <Link to={`/store/${props.cat.replace(' ', '_')}`}>
                <button className='cat-btn' type='button'> Shop </button>
            </Link>
        </div>
    );
}