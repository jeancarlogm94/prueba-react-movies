import './Main.css';
import React, { useState } from 'react';
import img1 from '../../assets/movies/img-1.jpg';
import img2 from '../../assets/movies/img-2.jpg';
import img3 from '../../assets/movies/img-3.jpg';
import img4 from '../../assets/movies/img-4.jpeg';
import img5 from '../../assets/movies/img-5.jpg';
import img6 from '../../assets/movies/img-6.jpg';
import img8 from '../../assets/movies/img-8.jpg';
import img9 from '../../assets/movies/img-9.jpg';
import img10 from '../../assets/movies/img-10.jpg';
import img11 from '../../assets/movies/img-11.jpg';
import img12 from '../../assets/movies/img-12.jpg';
import img13 from '../../assets/movies/img-13.jpg';
import img14 from '../../assets/movies/img-14.jpg';
import img15 from '../../assets/movies/img-15.jpeg';
import img16 from '../../assets/movies/img-16.jpg';
import img17 from '../../assets/movies/img-17.png';
import img18 from '../../assets/movies/img-18.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Main() {
  const movieList1 = [img1, img2, img3, img4, img5, img6, img8, img9, img10];
  const movieList2 = [img11, img12, img13, img14, img15, img16, img17, img18];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1200, min: 800 },
      items: 3,
    },
    phablet: {
      breakpoint: { max: 800, min: 400 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 400, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="main">
      <div className="title-categories container">
        <p>Today</p> / <p>This Week</p> / <p>Last 30 days</p>
      </div>

      <div className="container">
        <div className="row">
          <Carousel
            responsive={responsive}
            infinite={true}
            className="owl-carousel owl-theme skill-slider col-10 mx-auto"
          >
            {movieList1.map((img) => (
              <div key={img}>
                <img src={img} alt="movies" />
                <p className="category-movie">Action, 2016</p>
                <p className="name-movie">Marvel Studios Movies</p>
              </div>
            ))}
          </Carousel>

          <div className="main-container container col">
            <div className="movies-category">
              <div className="line-superior"></div>
              <div className="container"></div>
              <h3 className="title-category">Action & Drama Movies</h3>
              <div className="arrow-btns container">
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
          </div>
        </div>
      </div>

      <div className="main-2">
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
                  d<p>VIEW ALL {'>'}</p>
                </div>
              </div>
              <div className=" container"></div>
            </div>

            <Carousel
              responsive={responsive}
              infinite={true}
              className="owl-carousel owl-theme skill-slider container col-10 mx-auto"
            >
              {movieList2.map((img) => (
                <div key={img}>
                  <img src={img} alt="movies" />
                  <p className="category-movie">Action, 2016</p>
                  <p className="name-movie">Marvel Studios Movies</p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
