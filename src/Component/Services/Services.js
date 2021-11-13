import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res=> res.json())
        .then(data => {
            setServices(data)
        })
    }, [])

    return (
        <div>
            <div className="containerdd">
                        <img src="http://amentotech.com/htmls/tenanto/images/slider-imgs/banner-img.jpg" alt="" style={{width:"100%" }} />
                        <div className="bg-overlay"></div>
                        <div className="centeredd text-black text-white fw-bolder fs-2">All Apartment Available Here</div>
            </div>
            { services.length ===0 ? <Spinner animation="border" /> :
                    <div>
      
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