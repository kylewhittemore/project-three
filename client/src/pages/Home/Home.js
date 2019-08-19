import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function HomePage() {
    return (
        <div className="align-me">
            <Container className="page-center">
                <Row className="justify-content-center">
                    <Button variant="outline-success" size="lg">
                        <Link to="/newseason">New Season</Link>
                    </Button>
                </Row>
                <Row className="justify-content-center">
                    <Button variant="outline-success" size="lg">
                        <Link to="/currentseason:id">Current Seasons</Link>
                    </Button>
                </Row>
                <Row className="justify-content-center">
                    <Button variant="outline-success" size="lg">
                        <Link to="/pastseasons">Past Seasons</Link>
                    </Button>
                </Row>
                <Row className="justify-content-center">
                    <Button variant="outline-success" size="lg">
                        <Link to="/settings">Settings</Link>
                    </Button>
                </Row>
                <Row className="justify-content-center">
                    <Button variant="outline-success" size="lg">
                        <Link to="/logout">Log Out</Link>
                    </Button>
                </Row>
            </Container>
        </div>
    );
};

export default HomePage;