import React, { Component } from 'react'
// import { Link } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Axios from 'axios'
// import isAuth from '../../utils/isAuth'
import './style.css'


class Profile extends Component {
    state = {
        isAuth: false,
        username: "",
        email: "",
        _id: ""
    }

    // getToken() {
    //     Axios.defaults.headers.common['Authorization'] = localStorage.getItem('p3aajjkw-jwt')
    // }

    componentDidMount() {
        // isAuth();
        Axios.get('api/user/profile')
            .then (res => {
                this.setState ({ isAuth: true })
                const {username, email, _id} = res.data.user
                this.setState ( { username, email, _id })
            })
            .catch(console.log('Unauthenticated'))
    }

    render () {
        return (
            <div>
                {this.state.isAuth 
                    ?
                        <Container >
                            <h1> User's Profile</h1>
                            <h2> Username: {this.state.username} </h2>
                            <h2> Email: {this.state.email} </h2>
                            <h2> mongoDB _id: {this.state._id} </h2>
                        </Container >
                    :
                        <Container >
                            <h1> NO USER IS LOGGED IN </h1>
                        </Container >
                } 
            </div>
        )
    }
}

export default Profile;