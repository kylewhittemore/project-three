import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Axios from 'axios';
import setAuth from '../../utils/setAuth';
import './style.css';


class UserLogin extends Component {

    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleRegisterRequest = this.handleRegisterRequest.bind(this)
    };
    
    

    state = {
        userid: "",
        password: "",
        errorMsg: "",
        success: true,
        redirect: false,
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
            const {success, token, msg, user} = res.data
            this.setState({ success })
            if (this.state.success) {
                localStorage.setItem('p3aajjkw-jwt', token)
                // console.log(`user: ${JSON.stringify(user)}`)
                const userId = user.id
                localStorage.setItem('p3aajjkw-id', userId)
                setAuth()

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

    handleRegisterRequest = event => {
        event.preventDefault()
        this.props.registerUser(true)
        console.log(this.props)
    }

    render () {

        return ( 
            this.state.redirect ? <Redirect to={'/home'} />
            :
            <Container className="loginContainer bg-gradient-theme-right">
                
                <h2 className="text-center pt-2">Canna-Keeper Login</h2>
                { this.state.success ? null : 
                    <Alert variant="danger">
                        <Alert.Heading>You got an error!</Alert.Heading>
                        <h4>{ this.state.errorMsg }</h4>
                    </Alert>
                }
                <Form className="text-center" onSubmit = {this.handleFormSubmit} >
                    <Form.Row>
                        <Form.Group className="mx-auto" controlId="formUsername" >
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" name="username" value={this.state.username} 
                                onChange={this.handleInputChange}  />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row >
                        <Form.Group className="mx-auto" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={this.state.password} 
                                onChange={this.handleInputChange} />
                        </Form.Group>
                    </Form.Row>            
                    <Button className="m-2" variant="success" type="submit">
                        Submit
                    </Button>
                    <Button className="m-2" variant="info" onClick={event => this.handleRegisterRequest(event)} type="submit">
                        Register
                    </Button>
                </Form >
            </Container>
        )
    }
}

export default UserLogin;