import React from 'react';
import Carousel from '../Components/Carousel (FP)/CarouselComponent';

export default function Home(){
    return(
        <div>
            <Carousel images={['./assets/img/main2_16x9.jpg']}/>
            <div></div>
        </div>
    )
}