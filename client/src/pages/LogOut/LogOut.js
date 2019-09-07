import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function LogOutPage(props) {

    localStorage.removeItem('p3aajjkw-jwt')
    localStorage.removeItem('p3aajjkw-id')

    return (
        <Container>
            <Row>
                <Col md={6} className='log-out mx-auto'>
                    <h3>You have been logged out!</h3>
                    <div className='mt-5'>
                        <Button type='button' className='btn btn-primary btn-block' 
                        onClick={event => {
                            event.preventDefault()
                            props.history.push('/')
                        }}>Log In</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default LogOutPage;
