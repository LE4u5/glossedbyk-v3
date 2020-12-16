import React, { useState, useEffect } from 'react';
import './CarouselComponent.css'

export default function Carousel(props) {
    let timer = '';
    
    const [state, setState] = useState({ length: 1, active: 0, timer: 0 });

    const imgList = props.images.map((imgSrc, index) => {
        if (index === 0)
            return <img className='slide active-slide' src={imgSrc} alt={index} key={index} />
        else return <img className='slide' src={imgSrc} alt={index} key={index} />
    })

    const trackerList = imgList.map((v, index) => {
        if (index === 0) {
            return <div className='tracker active-tracker' key={index} onClick={() => selectSlide(index)}></div>
        } else {
            return <div className='tracker' key={index} onClick={() => selectSlide(index)}></div>
        }

    })

    useEffect(() => {
        setState(s => { return { ...s, length: props.images.length } });
    }, [props]);

    const nextSlide = () => {
        if (state.length > 1) {
            document.querySelectorAll('.slide')[state.active].classList.remove
                ('active-slide');
            document.querySelectorAll('.tracker')[state.active].classList.remove('active-tracker');
            if (state.active === (state.length - 1)) {
                document.querySelectorAll('.slide')[0].classList.add('active-slide');
                setState({ ...state, active: 0 });
                document.querySelectorAll('.tracker')[0].classList.add('active-tracker');
            }
            else {
                document.querySelectorAll('.slide')[state.active + 1].classList.add('active-slide');
                setState({ ...state, active: state.active + 1 });
                document.querySelectorAll('.tracker')[state.active + 1].classList.add('active-tracker');
            }

        }
    }

    const selectSlide = index => {
        if (imgList.length > 1) {
            clearTimeout(timer);
            document.querySelectorAll('.slide')[state.active].classList.remove
                ('active-slide');
            document.querySelectorAll('.tracker')[state.active].classList.remove('active-tracker');

            document.querySelectorAll('.slide')[index].classList.add('active-slide');
            document.querySelectorAll('.tracker')[index].classList.add('active-tracker');
            setState({ ...state, active: index });
        }
    }

    useEffect(() => timer = setTimeout(nextSlide, 5000),);

    return (
        <React.Fragment>
            <div className='carousel-cont'>
                {imgList}
                <div className='slide-overlay' />
                <div className='slide-tracker' >
                    {imgList.length > 1 ? trackerList: <div />}
                </div>
            </div>
        </React.Fragment>
    );
}

Carousel.defaultProps = {
    
}