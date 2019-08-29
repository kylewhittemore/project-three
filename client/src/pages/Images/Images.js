import React from "react";
// import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import PhotoCarousel from '../../components/PhotoCarousel/PhotoCarousel'

function ImagesPage(props) {

    // const userId = localStorage.getItem('p3aajjkw-id')

    let growId

    let url = window.location.href

    if (url.indexOf("?grow_id=") !== -1) {
        growId = url.split("=")[1]
    }

    return (
        <div className="align-me">
            <PhotoCarousel {...props}
                growId={growId}
            />
        </div>
    );
};

export default ImagesPage;