import React from 'react';
import {  Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';


import './Navigation.css';

const Navigation = () => {

    const {user, logOut } = useAuth();

    

    return (
        <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand>
                    <Nav.Link> 
                        <NavLink exact="true" to="/">
                        <img width="130px" src="http://html.tonatheme.com/2021/apartio-wp-intro/images/logo.png" alt=""/>
                              </NavLink>
                        </Nav.Link>
                        </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        
                        <NavLink className="custom" activeClassName="activeStyle" to="/home">
                                  Home
                        </NavLink>
                        

                        
                        <NavLink className="custom" activeClassName="activeStyle" to="/explore">
                                  Explore
                        </NavLink>
                        


                        {user.email && 
                        <div>
                            <NavLink className="custom" activeClassName="activeStyle" to="/dashboard">
                                  Dashboard
                            </NavLink>
                            
                        </div>
                           }
                        
                        
                        {user.email && 
                        <Nav.Link>                     

                            <div>
                                
                                <Row className="d-flex align-items-center">
                                <Col sm={2}>
                                    <Image className="header-pic-size" src={user?.photoURL} roundedCircle />
                                </Col>
                                <Col sm={9} className="header-pic ms-3" style={{ color: 'green', fontWeight: 'bold' }}> {user?.displayName}
                                </Col>
                                </Row>
                            </div>
                        </Nav.Link> }
                        {
                            user.email ?
                        <Nav.Link>
                            <NavLink className="custom-logout d-flex align-items-center" activeclassname="activeStyle" to="/login" onClick={logOut}>log out <i className="fas fa-sign-out-alt ms-2"></i>
                            </NavLink>

                        </Nav.Link>
                        
                        :

                        <Nav.Link>
                            <NavLink className="custom d-flex align-items-center " activeclassname="activeStyle" to="/login">
                            <i className="fas fa-user-plus me-2"></i> Login 
                            </NavLink>
                        </Nav.Link>}

                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Navigation;