
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {location, title, img, beds, price, bath, Garage, feet, _id} = props.service;
    return (
        
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                            <div className="card-flyer">
                                <div className="text-box">
                                    <div className="image-box">
                                        <img src={img} alt="" />
                                    </div>
                                    <div className="text-container">
                                            <span className="d-flex text-muted justify-content-start mb-1">Sale</span>
                                       <div className="d-flex justify-content-between align-items-center">
                                            <h6 style={{color: '#2D3954', fontSize: '18px', }} className="fw-bold m-0">{title}</h6>
                                            <p style={{fontSize: '22px', fontWeight: '700', color: '#dcc397'}} className="m-0">${price} </p>
                                       </div>
                                        
                                        <div className="d-flex justify-content-around">
                                            <p style={{color: '#616e96', fontSize: "14px"}}><i className="fas fa-bed pe-2"></i>{beds}Beds </p>
                                            <p style={{color: '#616e96', fontSize: "14px"}}><i className="fas fa-bath px-2"></i>{bath}Bath </p>
                                            <p style={{color: '#616e96', fontSize: "14px"}}><i className="fas fa-warehouse px-2"></i>{Garage}Garage </p>
                                            <p style={{color: '#616e96', fontSize: "14px"}}><i className="fas fa-arrows-alt ps-2"></i>{feet}sqft </p>
                                        </div>
                                        

                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-around">
                                        <p className="text-muted fw-bold fs-6 m-1"><i className="fas fa-map-marker-alt pe-2"></i>{location}</p>
                                        <Link to={`/orderPlaced/${_id}`}>
                                            <Button className="mb-3" variant="outline-danger">Buy Now</Button>
                                        </Link>
                                    </div>
                                    
                                </div>
                            </div>
                    </div>
       
    );
};

export default Service;