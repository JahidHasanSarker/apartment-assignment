import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-size"
                        src="https://demoapus2.com/abolire/wp-content/uploads/2019/09/slider-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Modern House Make Better Life</h3>
                        <p>We believe that only an experienced travel expert can help you discover its unique and amazing qualities. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-size"
                        src="https://demoapus2.com/abolire/wp-content/uploads/2019/09/slider-2.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Lets Take you to your Dream House</h3>
                        <p>We believe that only an experienced travel expert can help you discover its unique and amazing qualities. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-size"
                        src="https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/h2-slide-background-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Perfect Home for a Perfect Life</h3>
                        <p>We believe that only an experienced travel expert can help you discover its unique and amazing qualities. </p>
                    </Carousel.Caption>
                </Carousel.Item>
  
            </Carousel>
        </div>
    );
};

export default Banner;