import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
// import Axios from 'axios';
import './style.css';



class UserSignup extends Component {

   state = {
        userid: "",
        // email: "",
        password: "",
        password2: "",
        errors: {}
        }; 
    
    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleFormSubmit = e => {
        e.preventDefault();
        const formData = {
          name: this.state.username,
        //   email: this.state.email,
          password: this.state.password,
          password2: this.state.password2
        };
        console.log(formData);
    };

    render () {

        // const { errors } = this.state;

        return ( 
            <Container >
                
                <h1>SIGNUP PAGE</h1>

                <Form onSubmit = {this.handleFormSubmit} >
                    <Form.Row >
                        <Form.Group controlId="formUsername" >
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleInputChange}  />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row >
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                        </Form.Group>
                    </Form.Row>            
                    <Form.Row >
                        <Form.Group controlId="formPassword2">
                            <Form.Label>Enter Password Again</Form.Label>
                            <Form.Control type="password" name="password2" value={this.state.password2} onChange={this.handleInputChange} />
                        </Form.Group>
                    </Form.Row>            
                    <Button className="m-2" variant="success" type="submit">
                        Submit
                    </Button>
                </Form >
            </Container >
        )
    }

}

export default UserSignup;