import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Axios from 'axios';
import './style.css';



class UserSignup extends Component {

   state = {
        userid: "",
        email: "",
        password: "",
        password2: ""
        }; 
    
    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleFormSubmit = e => {
        e.preventDefault();
        console.log("submit clicked")
        if (this.state.password !== this.state.password2) {
            alert("passwords are not the same");
            console.log("passwords are not the same");
        } else {
            if (!this.state.username || !this.state.email || !this.state.password) {
                alert("All fields are required");
            } else if (this.state.password.length < 6) {
                alert(
                `Choose a more secure password `);
            //   } else {
                //   }
            } else {
                const newUser = {
                        username: this.state.username,
                        email: this.state.email,
                        password: this.state.password
                    };
                    console.log(newUser);
                    Axios.post('/api/user', newUser)
                    .then(user => {
                        console.log(`${user.username} is registered`) 
                        alert(`Thank You for registering ${user.userame}`)
                        window.location.href = '/'
                    })
                }
            };
        }
    

    render () {

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
                        <Form.Group controlId="formUserEmail" >
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" name="email" value={this.state.email} onChange={this.handleInputChange}  />
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