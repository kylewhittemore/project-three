import React, {useState, useEffect} from "react";
// import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
import Axios from 'axios'
import { Redirect } from 'react-router-dom'
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col'
// import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import LeftSliderBar from '../../components/LeftSliderBar/LeftSliderBar'
import Dashboard from '../../components/Dashboard/dashboard-kw'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
// import PhotoCarousel from '../../components/PhotoCarousel/PhotoCarousel'

function HomePage() {
    // const userId = localStorage.getItem('p3aajjkw-id')
    const userId = localStorage.getItem('p3aajjkw-id')
    
    // const [user, setUser] = useState({})
    // const [loading, setLoading] = useState(false)

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
                    <Dashboard />
                </Col>
            </Row>
        </div>
                
    )
}

export default HomePage;