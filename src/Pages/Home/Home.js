import React, { useState, useEffect, useCallback } from 'react';
import Carousel from '../../Components/Carousel (FP)/CarouselComponent';
import { NavLight } from '../../Components/NavBar/NavBarComponent';
import { Link } from 'react-router-dom';
import './Home.css';
import ProductCard from '../../Components/ProductCard/ProductCard';

export default function Home() {
    const [navBar, setNavBar] = useState(false);
    const toggleNav = useCallback(() => {
        if (!navBar && (window.scrollY >= 100)) {
            if (document.querySelector('.nav-cont')) {
                document.querySelector('.nav-cont').setAttribute('class', 'nav-cont active');
            }
            setNavBar(true);
            window.removeEventListener('scroll', toggleNav, false);
        }
        else if (navBar && (window.scrollY < 100)) {
            if (document.querySelector('.nav-cont')) {
                document.querySelector('.nav-cont').setAttribute('class', 'nav-cont');
            }
            setNavBar(false);
            window.removeEventListener('scroll', toggleNav, false);
        }
    }, [navBar, setNavBar])

    useEffect(() => {
        window.addEventListener('scroll', toggleNav, false);

        return () => {
            window.removeEventListener('scroll', toggleNav, false);

        }
    }, [toggleNav]);

    const featured = products.map(a => <ProductCard className='fl-items' image={a.image}
        name={a.name}
        price={a.price.toFixed(2)}
        salePrice={a.salePrice.toFixed(2)}
        sale={a.sale}
        key={a.id}
        link={`/store/products/${a.name.replace(/ /g, '_')}`} />)

    useEffect(() => {
        NavLight();
        if (document.querySelector('.lip-gloss-svg')) {
            document.querySelector('.lip-gloss-svg').setAttribute('class', 'lip-gloss-svg text-svg activate');
        }
        if (document.querySelector('.beauty-svg')) {
            document.querySelector('.beauty-svg').setAttribute('class', 'beauty-svg text-svg activate');
        }
        if (document.querySelector('.skin-care-svg')) {
            document.querySelector('.skin-care-svg').setAttribute('class', 'skin-care-svg text-svg activate');
        }
        return () => {
            if (document.querySelector('.nav-cont')) {
                document.querySelector('.nav-cont').setAttribute('class', 'nav-cont');
            }
        }
    }, [])

    return (
        <div className='home-cont'>
            <Carousel images={['./assets/img/main2_16x9.jpg', './assets/img/33A52603-FF73-42FE-9095-70D71585C325.jpg', './assets/img/98AADDD7-C4E1-475A-8472-980909C75FBA.jpg', './assets/img/EyelashandEyebrowGrowthSerum1x1.jpg']} />
            <div className='home-cl-overlay' >
                <img className='lip-gloss-svg text-svg' src='./assets/svg/Lip_Gloss.svg' alt='Lip Gloss' />
                <img className='beauty-svg text-svg' src='./assets/svg/beauty.svg' alt="Beauty" />
                <img className='skin-care-svg text-svg' src='./assets/svg/Skin_Care.svg' alt='Skin Care' />
                <Link to='/store'><button className='home-overlay-button' type='button' >Shop Now</button></Link>
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
            <Link to={`/store/${props.cat.replace(/ /g, '_')}`}>
                <button className='cat-btn' type='button'> Shop </button>
            </Link>
        </div>
    );
}

const products = [
    {
        id: 0,
        name: 'Rose and Lavender Spray',
        price: 6.99,
        sale: false,
        salePrice: 0,
        image: './assets/img/products/Rose and Lavender Spray1x1.jpg'
    },
    {
        id: 1,
        name: 'Mini Hand Sanitizer',
        price: 3.50,
        sale: false,
        salePrice: 6.00,
        image: './assets/img/products/MiniHandSanitizers1x1.jpg'
    },
    {
        id: 2,
        name: 'Whipped Face & Body Butter',
        price: 7.99,
        sale: true,
        salePrice: 6.00,
        image: './assets/img/products/WhippedFaceandBodyButter1x1.jpg'
    },
    {
        id: 3,
        name: 'Vanilla Rose Face & Body Scrub',
        price: 6.99,
        sale: false,
        salePrice: 0,
        image: './assets/img/products/VanillaRoseFace&BodyScrub1x1.jpg'
    }
];