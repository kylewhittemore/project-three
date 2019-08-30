import React, { useState, useEffect } from "react";
import Login from '../../components/Login/Login'
import Register from '../../components/Register/Register'
// import Container from "react-bootstrap/Container";
import { Redirect } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col'
// import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function Landing(props) {
    const [register, setRegister] = useState(false)

    const userId = localStorage.getItem('p3aajjkw-id')
    
    if (userId) {
        return (
            <Redirect to={'/home'} />
        )
    }

    const registerUser = bool => {
        setRegister(bool)
    }

    return (
        <div>
            <Row >
                <Col className='col-md-6 mx-auto'>
                    {!register ? <Login {...props} registerUser={registerUser} /> : <Register {...props} registerUser={registerUser} />}
                </Col>
            </Row>
        </div>
    );
};

export default Landing;