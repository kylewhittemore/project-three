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
import Dashboard from '../../components/Dashboard/Dashboard'
import DashboardChart from '../../components/DashboardChart/DashboardChart'
import 'bootstrap/dist/css/bootstrap.min.css';
// import PhotoCarousel from '../../components/PhotoCarousel/PhotoCarousel'

function HomePage(props) {


    return (
        <div>
            {/* <LeftSliderBar />
            <Row >
                <Col className='col-md-6 mx-auto'> */}
                    <Dashboard {...props} />
                    {/* <DashboardChart {...props}/> */}
 
                {/* </Col>
            </Row> */}
        </div>
                
    )
}

export default HomePage;