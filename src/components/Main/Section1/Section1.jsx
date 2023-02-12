import './Section1.css';
import React, { useRef } from 'react';
import CarouselSection1 from './CarouselSection1';
import Section2 from '../Section2/Section2';

function Section1() {
    const carouselRef = useRef(null);

    const clickNext = () => {
        carouselRef.current.next();
    };

    const clickPrev = () => {
        carouselRef.current.previous();
    };

    return (
        <div className="section1">
            <div className="title-categories container">
                <p>Today</p> / <p>This Week</p> / <p>Last 30 days</p>
            </div>

            <div className="container">
                <div className="row">
                    <CarouselSection1 carouselRef={carouselRef} />
                    <div className="section1-container container col">
                        <div className="movies-category">
                            <div className="line-superior"></div>
                            <div className="container"></div>
                            <h3 className="title-category">
                                Action & Drama Movies
                            </h3>
                            <div className="arrow-btns container">
                                <button
                                    onClick={clickPrev}
                                    className="arrow-circle"
                                >
                                    <i className="fa-solid fa-chevron-left"></i>
                                </button>
                                <button
                                    onClick={clickNext}
                                    className="arrow-circle"
                                >
                                    <i className="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>
                            <div className="view-all">
                                <p>VIEW ALL {'>'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Section2 />
        </div>
    );
}

export default Section1;
