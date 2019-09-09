import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';

function LogOutPage(props) {

    localStorage.removeItem('p3aajjkw-jwt')
    localStorage.removeItem('p3aajjkw-id')

    return (
        <Container className="logoutContainer">
            <Row>
                <Col md={6} className='log-out mx-auto'>
                    <h3>You have been logged out!</h3>
                    <div className='mt-5 text-center'>
                        <Button type='button' className='btn bg-gradient-theme-left' 
                        onClick={event => {
                            event.preventDefault()
                            props.history.push('/')
                        }}><strong>Log back in to your Canna-Keeper account</strong></Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default LogOutPage;
