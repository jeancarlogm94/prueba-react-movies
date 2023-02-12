import React from 'react';
import './Section2.css';
import CarouselSection2 from './CarouselSection2';

function Section2() {
    return (
        <div className="section2">
            <div className="title-categories container">
                <p>Today</p> / <p>This Week</p> / <p>Last 30 days</p>
            </div>

            <div className="container">
                <div className="row">
                    <div className="container col">
                        <div className="movies-category ">
                            <div className="line-superior"></div>
                            <h3 className="title-category">
                                Funniest Comedy Movies of 2018
                            </h3>
                            <div className="arrow-btns">
                                <button className="arrow-circle">
                                    <i className="fa-solid fa-chevron-left"></i>
                                </button>
                                <button className="arrow-circle">
                                    <i className="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>
                            <div className="view-all">
                                <p>VIEW ALL {'>'}</p>
                            </div>
                        </div>
                        <div className=" container"></div>
                    </div>

                    <CarouselSection2 />
                </div>
            </div>
        </div>
    );
}

export default Section2;
