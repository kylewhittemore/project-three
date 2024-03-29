import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import { Alert, Button, Container, Form, Col, Row } from 'react-bootstrap/';
import Axios from 'axios';
import './style.css';



class UserSignup extends Component {
    constructor(props) {
        super(props);
        // this.state = { isOn: true };
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    };
    state = {
        userid: "",
        email: "",
        password: "",
        password2: "",
        success: true,
        errorMsg: ""
    };

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleFormSubmit = e => {
        e.preventDefault();
        // console.log("submit clicked")
        if (this.state.password !== this.state.password2) {
            this.setState({ success: false, errorMsg: "passwords are not the same" })
            // alert("passwords are not the same");
            // console.log("passwords are not the same");
        } else {
            if (!this.state.username || !this.state.email || !this.state.password) {
                // alert("All fields are required");
                this.setState({ success: false, errorMsg: "All fields are required" })
            } else if (this.state.password.length < 6) {
                this.setState({ success: false, errorMsg: "Password must be at least 8 characters" })
                // alert(
                // `Choose a more secure password `);
                //   } else {
                //   }
            } else {
                const newUser = {
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password
                };
                // console.log(newUser);
                Axios.post('/api/user', newUser)
                    .then(res => {
                        const { success, user, errorMsg } = res.data
                        this.setState({ success })
                        if (this.state.success) {
                            let username = user.username
                            this.setState({ username })
                            console.log(`${username} is registered`)
                            // alert(`Thank You for registering ${user.userame}`)
                            this.setState({ username: "", email: "", password: "", password2: "" })
                            // this.props.history.push('/login')
                            this.props.registerUser(false)
                            console.log(this.props)
                        } else {
                            this.setState({ errorMsg })
                        }
                    })
            }
        };
    }


    render() {

        return (
            <Container className="registerContainer bg-gradient-theme-left">
                <Row>
                    <Col className="registerCol mx-auto my-auto">

                        <h2 className="text-center pt-2">Canna-Keeper Sign Up Page</h2>
                        {this.state.success ? null :
                            <Alert variant="danger">
                                <Alert.Heading>You got an error!</Alert.Heading>
                                <h4>{this.state.errorMsg}</h4>
                            </Alert>
                        }

                        <Form className="text-center" onSubmit={this.handleFormSubmit} >
                            <Form.Row className="text-center">
                                <Form.Group className="mx-auto" controlId="formUsername" >
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row >
                                <Form.Group className="mx-auto" controlId="formUserEmail" >
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row >
                                <Form.Group className="mx-auto" controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row >
                                <Form.Group className="mx-auto" controlId="formPassword2">
                                    <Form.Label>Enter Password Again</Form.Label>
                                    <Form.Control type="password" name="password2" value={this.state.password2} onChange={this.handleInputChange} />
                                </Form.Group>
                            </Form.Row>
                            <Button variant="info" type="submit">
                                Submit
                    </Button>
                        </Form >
                    </Col>

                </Row>

            </Container >
        )
    }

}

export default UserSignup;