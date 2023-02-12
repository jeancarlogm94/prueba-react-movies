import React from 'react';
import img11 from '../../../assets/movies/img-11.jpg';
import img12 from '../../../assets/movies/img-12.jpg';
import img13 from '../../../assets/movies/img-13.jpg';
import img14 from '../../../assets/movies/img-14.jpg';
import img15 from '../../../assets/movies/img-15.jpeg';
import img16 from '../../../assets/movies/img-16.jpg';
import img17 from '../../../assets/movies/img-17.png';
import img18 from '../../../assets/movies/img-18.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function CarouselSection2({ carouselRef }) {
    const movieList2 = [img11, img12, img13, img14, img15, img16, img17, img18];

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 8,
        },
        largeDesktop: {
            breakpoint: { max: 3000, min: 1400 },
            items: 6,
        },
        mediumDesktop: {
            breakpoint: { max: 1400, min: 1200 },
            items: 5,
        },
        smallDesktop: {
            breakpoint: { max: 1200, min: 1000 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1000, min: 780 },
            items: 3,
        },
        phablet: {
            breakpoint: { max: 780, min: 450 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 450, min: 0 },
            items: 1,
        },
    };

    return (
        <div className="container col-10 mx-auto">
            <style>
                {`.carousel-control-next-icon, .carousel-control-prev-icon {display: none !important;}`}
            </style>
            <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider "
                ref={carouselRef}
            >
                {movieList2.map((img) => (
                    <div key={img}>
                        <img src={img} alt="movies" />
                        <p className="category-movie">Action, 2016</p>
                        <p className="name-movie">Marvel Studios</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default CarouselSection2;
