import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Axios from 'axios';
import './style.css';


class UserLogin extends Component {

    state = {
        userid: "",
        password: "",
        errorMsg: "",
        success: true,
        redirect: false
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
            // console.log(JSON.stringify(res.data))
            const {success, token, msg} = res.data
            this.setState({ success })
            if (this.state.success) {
                localStorage.setItem('p3aajjkw-jwt', token)
                localStorage.setItem('p3aajjkw-user', user)
                // redirect to home page
                this.setState({ redirect: true }) 
                // this.props.history.push('/')                
                // Axios.defaults.headers.common['Authorization'] = token;
            } else {
                this.setState({ errors : msg });
                // reload current page with messages
            }
        });
    };

    render () {

        return ( 
            this.state.redirect ? <Redirect to={'/'} />
            :
            <Container >
                
                <h1>LOGIN PAGE</h1>
                { this.state.success ? null : 
                    <Alert variant="danger">
                        <Alert.Heading>You got an error!</Alert.Heading>
                        <h4>{ this.state.errorMsg }</h4>
                    </Alert>
                }
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