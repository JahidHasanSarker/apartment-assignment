import React from 'react';
import { Container } from 'react-bootstrap';
import './AllReviews.css';

const AllReviews = () => {
    return (
        <div>
            <Container>
               
                <div>
                    <div className="pn_reviews my-5">
                        <div>
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="text-center pb-4">Reviews of our valuable clients</h1>
                                <p className="text-center">Client’s Great Feedback</p>
                            </div>

                            <div className="col-md-12 col-lg-4">
                                <div className="pn_testimonial_box mt-4">
                                    <p className="text-justify">What does Lorem Ipsum mean? Derived from Latin dolorem ipsum (“pain itself”), Lorem Ipsum is filler text used by publishers and graphic designers used to demonstrate graphic elements.
                </p>

                                    <div className="row pt-3">
                                        <div className="col-md-6 pn_review_profile"><img src="https://desklib.com/static/src/assets/images/v2/profile_1.svg" className="border-radius-12 float-right" alt="" /> <span> Charles Boyle </span> </div>
                                        <div className="col-md-6 pn_review_rating d-flex justify-content-end"> 5 &nbsp; <img className="image-radius aligncenter" src="https://desklib.com/static/src/assets/images/v2/star_rating.svg" alt="" /> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                                <div className="pn_testimonial_box mt-4">
                                    <p className="text-justify">What does Lorem Ipsum mean? Derived from Latin dolorem ipsum (“pain itself”), Lorem Ipsum is filler text used by publishers and graphic designers used to demonstrate graphic elements.
                </p>
                                    <div className="row pt-3">
                                        <div className="col-md-6 pn_review_profile"><img src="https://desklib.com/static/src/assets/images/v2/profile_2.svg" className="border-radius-12 float-right" alt="" /> <span> Gina Lannety </span> </div>
                                        <div className="col-md-6 pn_review_rating d-flex justify-content-end"> 5 &nbsp; <img className="image-radius aligncenter" src="https://desklib.com/static/src/assets/images/v2/star_rating.svg" alt="" /> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                                <div className="pn_testimonial_box mt-4">
                                    <p className="text-justify">What does Lorem Ipsum mean? Derived from Latin dolorem ipsum (“pain itself”), Lorem Ipsum is filler text used by publishers and graphic designers used to demonstrate graphic elements.
                </p>
                                    <div className="row pt-3">
                                        <div className="col-md-6 pn_review_profile"><img src="https://desklib.com/static/src/assets/images/v2/profile_3.svg" className="border-radius-12 float-right" alt="" /> <span> Dug Judey </span> </div>
                                        <div className="col-md-6 pn_review_rating d-flex justify-content-end"> 5 &nbsp; <img className="image-radius aligncenter" src="https://desklib.com/static/src/assets/images/v2/star_rating.svg" alt="" /> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </Container>    
        </div>
    );
};

export default AllReviews;