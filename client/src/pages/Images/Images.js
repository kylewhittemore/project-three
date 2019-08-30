import React from "react";
// import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import PhotoCarousel from '../../components/PhotoCarousel/PhotoCarousel'
import LeftSliderBar from '../../components/LeftSliderBar/LeftSliderBar'
import { Redirect } from 'react-router-dom'

function ImagesPage(props) {

    const userId = localStorage.getItem('p3aajjkw-id')

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
                    // get all photos by user instead, hold them in state for filtering
                />
            </div>
        </>
    );
};

export default ImagesPage;