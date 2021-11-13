import React, { useEffect, useState } from 'react';
import { Accordion, Container } from 'react-bootstrap';

import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './OrderPlaced.css';
import axios from 'axios';

const OrderPlaced = () => {
    const {id} = useParams();
    const [data, setData] = useState([]);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        
        data.status= 'pending';
        data.title= ExactIteam[0]?.title;

        axios.post('http://localhost:5000/orders', data)
        .then(res => {
        if (res.data.insertedId) {
            alert('Order Placed SuccessFully');
            reset();
        }
    })

    }

    useEffect(()=>{
        fetch(`http://localhost:5000/products`)
        .then(res => res.json())
        .then(data => setData(data))
        
    },[])
    

    const ExactIteam = data.filter(td => td._id === id);
    
    return (
        <div>
            <div className="containerdd">
                        <img src="http://amentotech.com/htmls/tenanto/images/slider-imgs/banner-img.jpg" alt="" style={{width:"100%" }} />
                        <div className="bg-overlay"></div>
                        <div className="centeredd text-black text-white fw-bolder fs-2">Booked Your Perfect Apartment</div>
            </div>
                   
            <div>
                <Container>
                    
                <div>

                        <div className="d-flex my-5">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-8 gx-5">
                            <div className=" mb-5">
                                <img style={{borderRadius: '12px'}} width="100%" src={ExactIteam[0]?.img} alt="" />
                            </div>

                            <div className="bg-white py-4 rounded-bg">
                                <div className='order-details ms-4'>
                                    <span>Sale</span>
                                    <h3>{ExactIteam[0]?.title}</h3>
                                    <h4><i className="fas fa-map-marker-alt pe-2"></i>{ExactIteam[0]?.location}</h4>
                                    <h5>${ExactIteam[0]?.price}</h5>
                                    <div className="d-flex">
                                    <p style={{color: '#616e96', fontSize: "14px"}}><i className="fas fa-bed pe-2"></i>{ExactIteam[0]?.beds}Beds </p>
                                            <p style={{color: '#616e96', fontSize: "14px", margin: '0 15px' }}><i className="fas fa-bath px-2"></i>{ExactIteam[0]?.bath}Bath </p>
                                            <p style={{color: '#616e96', fontSize: "14px", margin: '0 15px'}}><i className="fas fa-warehouse px-2"></i>{ExactIteam[0]?.garage}Garage </p>
                                            <p style={{color: '#616e96', fontSize: "14px"}}><i className="fas fa-arrows-alt ps-2"></i>{ExactIteam[0]?.feet} sqft </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                            <Accordion className="mt-5 rounded-bg" defaultActiveKey="0">
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Ameneties</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="d-flex justify-content-around">
                                            <div>
                                                <p className="text-muted"><i className="far fa-check-circle text-color me-2"></i>Air Conditioning</p>
                                                <p className="text-muted"><i className="far fa-check-circle text-color me-2"></i>Alarm System</p>
                                                <p className="text-muted"><i className="far fa-check-circle text-color me-2"></i>Car Parking</p>
                                            </div>
                                            <div>
                                                <p className="text-muted"><i className="far fa-check-circle text-color me-2"></i>Central Heating</p>
                                                <p className="text-muted"><i className="far fa-check-circle text-color me-2"></i>Free WiFi</p>
                                                <p className="text-muted"><i className="far fa-check-circle text-color me-2"></i>Gym</p>
                                            </div>
                                            <div>
                                                <p className="text-muted"><i className="far fa-check-circle text-color me-2"></i>Internet</p>
                                                <p className="text-muted"><i className="far fa-check-circle text-color me-2"></i>Pets Allow</p>
                                                <p className="text-muted"><i className="far fa-check-circle text-color me-2"></i>Window Covering</p>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                </Accordion>
                                <Accordion className="my-4 rounded-3" defaultActiveKey="0">
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Description</Accordion.Header>
                                    <Accordion.Body>
                                    There is a distinct joy in owning a piece of land unlike that which you have in money, in houses, in books, in pictures, or anything else which men have devised. Personal property brings you into society with men. But land is part of God's estate in the globe; and when a parcel of land is deeded to you, and you walk over it, and call it your own, it seems as if you had come into partnership with the original proprietor of the earth.
                                    </Accordion.Body>
                                </Accordion.Item>

                                </Accordion>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 gx-5">

                            <div className="bg-white rounded-bg">
                            <form onSubmit={handleSubmit(onSubmit)}>
                           
                            
                           <div className="input-style py-3">
                                <input {...register("name", { required: true })} placeholder="Your Name"/>
                                {/* errors will return when field validation fails  */}
                                <input {...register("email", { required: true })} placeholder="Your Email"/>
                                
                                {/* errors will return when field validation fails  */}
                                <input {...register("address", { required: true })} placeholder="Your Address"/>

                                <input type="number" {...register("phone", { required: true })} placeholder="Phone"/>
                                
                                {/* errors will return when field validation fails  */}
                                <textarea {...register("description", { required: true })} placeholder="Description"/>
                                {errors.exampleRequired && <span className="text-warning">This field is required</span>}
      
                                <input className="submit-btn" type="submit" value="Buy"/>
                           </div>
                                                        
                        </form>
                            </div>

                        </div>
                        </div>
                    </div>
                                          
                </div>
                    
                </Container>
            </div>
        </div>
    );
};

export default OrderPlaced;



