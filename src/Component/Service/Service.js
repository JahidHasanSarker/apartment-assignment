import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {country, title, img, duration, cost, _id} = props.service;
    return (
        
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                            <div className="card-flyer">
                                <div className="text-box">
                                    <div className="image-box">
                                        <img src={img} alt="" />
                                    </div>
                                    <div className="text-container">
                                        <h6 className="fw-bold">{country}</h6>
                                        <p className="text-muted fw-bold fs-6">{title}</p>
                                        <p>Duration: {duration} Days</p>
                                        <p>Cost: ${cost}</p>
                                    </div>
                                    <Link to={`/orderPlaced/${_id}`}>
                                        <Button className="mb-3" variant="outline-danger">Buy Now</Button>
                                    </Link>
                                    
                                </div>
                            </div>
                    </div>
       
    );
};

export default Service;