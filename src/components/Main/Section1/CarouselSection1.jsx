import React from 'react';
import img1 from '../../../assets/movies/img-1.jpg';
import img2 from '../../../assets/movies/img-2.jpg';
import img3 from '../../../assets/movies/img-3.jpg';
import img4 from '../../../assets/movies/img-4.jpeg';
import img5 from '../../../assets/movies/img-5.jpg';
import img6 from '../../../assets/movies/img-6.jpg';
import img8 from '../../../assets/movies/img-8.jpg';
import img9 from '../../../assets/movies/img-9.jpg';
import img10 from '../../../assets/movies/img-10.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function CarouselSection1({ carouselRef }) {
    const movieList1 = [img1, img2, img3, img4, img5, img6, img8, img9, img10];

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
        <div className="col-10 mx-auto">
            <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider "
                ref={carouselRef}
            >
                {movieList1.map((img) => (
                    <div key={img}>
                        <img src={img} alt="movies" />
                        <p className="category-movie">Action, 2016</p>
                        <p className="name-movie">Marvel Studios</p>
                    </div>
                ))}
            </Carousel>
            {/* <img src={movieList2[0]} alt="" /> */}
        </div>
    );
}

export default CarouselSection1;
