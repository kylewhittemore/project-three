import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Axios from 'axios';
import './style.css';


class UserLogin extends Component {

    state = {
        userid: "",
        password: "",
        errors: "",
        success: null
        }; 
    
    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    
    handleFormSubmit = e => {
        e.preventDefault();
        Axios.post('/api/user/authenticate',  {
            username: this.state.username,
            password: this.state.password
        }).then(res => {
            console.log(JSON.stringify(res.data))
            const {success, token, user, msg} = res.data
            this.setState({ success })
            if (success) {
                localStorage.setItem('p3aajjkw-jwt', token)
                localStorage.setItem('p3aajjkw-user', user)

                // Axios.defaults.headers.common['Authorization'] = token;
                // redirect to home page
            } else {
                this.setState({ errors : msg });
                // reload current page with messages
            }
        });
        // console.log(formData);
    };

    render () {

        return ( 

            <Container >
                
                <h1>LOGIN PAGE</h1>
                <Form onSubmit = {this.handleFormSubmit} >
                    <Form.Row >
                        <Form.Group controlId="formUsername" >
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" name="username" value={this.state.username} 
                                onChange={this.handleInputChange}  />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row >
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={this.state.password} 
                                onChange={this.handleInputChange} />
                        </Form.Group>
                    </Form.Row>            
                    <Button className="m-2" variant="success" type="submit">
                        Submit
                    </Button>
                </Form >
            </Container>
        )
    }
}

export default UserLogin;