import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div>
            <div className="containerdd">
                        <img src="http://amentotech.com/htmls/tenanto/images/slider-imgs/banner-img.jpg" alt="" style={{width:"100%" }} />
                        <div className="bg-overlay"></div>
                        <div className="centeredd text-black text-white fw-bolder fs-2">Not Found Page</div>
            </div>
            <Container>
                        
                <div className="text-center py-5">
                    <div className="py-3">
                        <img className="py-3" src="https://templates.envytheme.com/medip/default/assets/images/error.png" alt="" />
                    </div>
                    <div className="py-3">
                        <h3>Error 404 : Page Not Found</h3>
                        <p>The page you are looking for might have been removed had its name<br/> changed or is temporarily unavailable.</p>
                    </div>
                        <Link to="/home"><Button className="mb-5" variant="outline-warning">Home</Button></Link>
                </div>  

            </Container>
        </div>
    );
};

export default NotFound;