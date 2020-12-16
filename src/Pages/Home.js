import React, {useEffect} from 'react';
import Carousel from '../Components/Carousel (FP)/CarouselComponent';
import {NavDark} from '../Components/NavBar/NavBarComponent';

export default function Home(){
    // useEffect(()=> NavDark(), []);

    return(
        <div className='home-cont'>
            <Carousel images={['./assets/img/main2_16x9.jpg','./assets/img/main2_16x9.jpg']}/>
            <div></div>
        </div>
    )
}