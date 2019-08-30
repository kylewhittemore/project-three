import React from "react";
// import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
import { Redirect } from 'react-router-dom'
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col'
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftSliderBar from '../../components/LeftSliderBar/LeftSliderBar'
// import PhotoCarousel from '../../components/PhotoCarousel/PhotoCarousel'

function HomePage() {
    // const userId = localStorage.getItem('p3aajjkw-id')
    const userId = localStorage.getItem('p3aajjkw-id')

    if (!userId) {
        return (
            <Redirect to={'/'} />
        )
    }

    return (
        <div>
            <LeftSliderBar />
            <Row >
                <Col className='col-md-6 mx-auto'>
                    <h1>Content Goes here</h1>
                </Col>
            </Row>
        </div>
    );
};

export default HomePage;