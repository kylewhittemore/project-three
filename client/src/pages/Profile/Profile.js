import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Axios from 'axios';
import './style.css';


class Profile extends Component {
    state = {
        isAuth: false,
        username: "",
        email: "",
        _id: ""
    }

    getToken() {
        Axios.defaults.headers.common['Authorization'] = localStorage.getItem('p3aajjkw-jwt')
    }

    componentDidMount() {
        this.getToken();
        Axios.get('api/user/profile')
            .then (res => {
                this.setState ({ isAuth: true })
                const {username, email, _id} = res.data.user
                this.setState ( { username, email, _id })
            })
            .catch(err => console.log('Unauthenticated'))
    }

    render () {
        return (
            <div>
                <Container style={{ opacity: this.state.isAuth ? 1 : 0 }} >
                    <h1> Username: {this.state.username} </h1>
                    <h1> Email: {this.state.email} </h1>
                    <h1> mongoDB _id: {this.state._id} </h1>
                </Container>
                <Container style={{ opacity: this.state.isAuth ? 0 : 1 }} >
                    <h1> NO USER IS LOGGED IN </h1>
                </Container>
            </div>
        )
    }
}

export default Profile;