import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function LogOutPage() {
    return (
        <Container>
            <Row>
                <Col md={6} className='log-out mx-auto'>
                    <h3>You have been logged out!</h3>
                    <div className='mt-5'>
                        <Button type='submit' className='btn btn-primary btn-block'>Log In</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default LogOutPage;
