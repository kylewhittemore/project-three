import React, { useState, useEffect } from "react";
// import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import PhotoCarousel from '../../components/PhotoCarousel/PhotoCarousel'
import LeftSliderBar from '../../components/LeftSliderBar/LeftSliderBar'
import { Redirect } from 'react-router-dom'
import Axios from 'axios'

function ImagesPage(props) {

    // const userId = localStorage.getItem('p3aajjkw-id')

    const [user, setUser] = useState('')
    const [growId, setGrowId] = useState('')
    const [growImages, setGrowImages] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function fetchUser() {
            setLoading(true);
            let response = await Axios.get(`/api/user/profile`);
            let data = response.data
            // console.log("USER: " + JSON.stringify(data))
            setLoading(false)
            return data.user;
        }
        // async function fetchImages() {
        //     Axios.get(`/api/user/getuserimages/${user._id}`)
        // }
        fetchUser().then(user => {
            if (!user._id) {
                return (
                    <Redirect to={'/'} />
                )
            }
            setUser(user)
            return user
        })
        .then(user => {
            console.log("user: ", user)
            let url = window.location.href
        
            if (url.indexOf("?grow_id=") !== -1) {
                setGrowId(url.split("=")[1])
            } else {
                setGrowId(user.defaultGrow)
            }
            return user
        })
        .then(user => {
            
        })
    }, [])

    return (
        <>
            <LeftSliderBar {...props} />
            <div className="align-me">
                {/* <PhotoCarousel {...props}
                    growId={growId}
                    userId={userId}
                /> */}

            </div>
        </>
    );
};

export default ImagesPage;