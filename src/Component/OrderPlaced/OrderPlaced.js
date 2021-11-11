import React, { useEffect, useState } from 'react';
import { Accordion, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './OrderPlaced.css';

const OrderPlaced = () => {
    const {id} = useParams();
    const [data, setData] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    useEffect(() => {}, [])

    const ExactIteam = data.filter(td => td._id === id);
    return (
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
                        <h2 className="text-white fw-bolder">Booked Your Perfect Apartment</h2>
                    </div>
                   
            <div>
                <Container>
                    
                <div>

                        <div className="d-flex my-5">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-8 gx-5">
                            <div className="">
                                <img width="100%" src="https://resido.smartdemowp.com/wp-content/uploads/p-4.jpg" alt="" />
                            </div>

                            <div className="bg-white my-5 rounded-3">
                                <div className='ms-5'>
                                    <h3>Title</h3>
                                    <h5>Price</h5>
                                    <div>
                                        <p>Beds</p>
                                        <p>Baths</p>
                                        <p>1200sqft</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                            <Accordion className="mt-5 rounded-3" defaultActiveKey="0">
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Ameneties</Accordion.Header>
                                    <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>

                                </Accordion>
                                <Accordion className="my-4 rounded-3" defaultActiveKey="0">
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                                    <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>

                                </Accordion>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 gx-5">

                            <div className="bg-white rounded-3">
                            <form onSubmit={handleSubmit(onSubmit)}>
                           
                            
                           <div className="input-style py-3">
                                <input {...register("name", { required: true })} placeholder="Your Name"/>
                                {/* errors will return when field validation fails  */}
                                <input {...register("email", { required: true })} placeholder="Your Email"/>
                                <input readOnly={true} {...register("destination", { required: true })} placeholder="Your Destination" value={ExactIteam[0]?.country} />
                                {/* errors will return when field validation fails  */}
                                <input {...register("address", { required: true })} placeholder="Your Address"/>
                                {/* errors will return when field validation fails  */}
                                <textarea {...register("description", { required: true })} placeholder="Description"/>
                                {errors.exampleRequired && <span className="text-warning">This field is required</span>}
      
                                <input className="submit-btn" type="submit" value="Booked"/>
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



