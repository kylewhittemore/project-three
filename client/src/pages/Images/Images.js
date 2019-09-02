import React, { useState, useEffect } from "react";
// import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import PhotoCarousel from '../../components/PhotoCarousel/PhotoCarousel'
import LeftSliderBar from '../../components/LeftSliderBar/LeftSliderBar'
import { Redirect } from 'react-router-dom'

function ImagesPage(props) {

    const userId = localStorage.getItem('p3aajjkw-id')

    const [user, setUser] = useState('')
    const [growImages, setGrowImages] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        
    }, [])

    if (!userId) {
        return (
            <Redirect to={'/'} />
        )
    }

    let growId

    let url = window.location.href

    if (url.indexOf("?grow_id=") !== -1) {
        growId = url.split("=")[1]
    }

    return (
        <>
            <LeftSliderBar {...props} />
            <div className="align-me">
                <PhotoCarousel {...props}
                    growId={growId}
                    userId={userId}
                />
            </div>
        </>
    );
};

export default ImagesPage;