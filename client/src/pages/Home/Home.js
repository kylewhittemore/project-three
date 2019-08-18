import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./style.css";

function HomePage() {
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Button variant="outline" size="lg">
                        <Link to="/newseason">New Season</Link>
                    </Button>
                </Row>
                <Row className="justify-content-md-center">
                    <Button variant="outline" size="lg">
                        <Link to="/currentseason:id">Current Seasons</Link>
                    </Button>
                </Row>
                <Row className="justify-content-md-center">
                    <Button variant="outline" size="lg">
                        <Link to="/pastseasons">Past Seasons</Link>
                    </Button>
                </Row>
                <Row className="justify-content-md-center">
                    <Button variant="outline" size="lg">
                        <Link to="/settings">Settings</Link>
                    </Button>
                </Row>
                <Row className="justify-content-md-center">
                    <Button variant="outline" size="lg">
                        <Link to="/logout">Log Out</Link>
                    </Button>
                </Row>
            </Container>
        </div>
    )
};

export default HomePage();