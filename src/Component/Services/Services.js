import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/apartment.json')
        .then(res=> res.json())
        .then(data => {
            setServices(data)
        })
    }, [])

    return (
        <div>
            { services.length ===0 ? <Spinner animation="border" /> :
                    <div>
                        <div className="img-overlay">
                    <div className="overlay-padding">
                        <div className="notfound-img">
                            <img src="http://amentotech.com/htmls/tenanto/images/slider-imgs/banner-img.jpg" alt="" />
                        </div>
                        <div className="bg-overlay"></div>
                    </div>
                </div>
                        <div className="img-text">
                            <h2 className="text-white fw-bolder">All Apartment Available Here</h2>
                        </div>

                <div id="cards_landscape_wrap-2">
                <div className="container">
                    <div className="row">
                    {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
                    </div>
                </div>
            </div>
                    </div>
                }

        </div>
    );
};

export default Services;