// import React, { useState, useEffect } from "react";
// // import "./style.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import PhotoCarousel from '../../components/PhotoCarousel/PhotoCarousel'
// import LeftSliderBar from '../../components/LeftSliderBar/LeftSliderBar'
// import { Redirect } from 'react-router-dom'
// import Axios from 'axios'
// import Image from 'react-bootstrap/Image'

// function ImagesPage(props) {

//     const styles = {
//         image: {
//             height: 171 + "px",
//             // padding: 5 + "px"
//         }
//     }

//     const userId = localStorage.getItem('p3aajjkw-id')

//     const [user, setUser] = useState('')
//     const [growId, setGrowId] = useState('')
//     const [growImages, setGrowImages] = useState([])
//     const [loading, setLoading] = useState(false)
//     const [images, setImages] = useState([])
//     const [grows, setGrows] = useState([])


//     useEffect(() => {

//         async function fetchUser() {
//             let response = await Axios.get(`/api/user/profile`)
//             console.log(response)
//             return response.data.user.defaultGrow
//         }

//         fetchUser().then(defaultGrow => {

//             // let url = window.location.href

//             // if (url.indexOf("?grow_id=") !== -1) {
//             //     setGrowId(url.split("=")[1])
//             // } else {
//                 setGrowId(defaultGrow)
//                 console.log("default    ", defaultGrow)
//             // }

//         }).catch(err => console.log(err))

//     }, [])

//     // async function fetchUser() {
//     //     let response = await Axios.get(`/api/user/profile`)
//     //     console.log(response)
//     //     return response
//     // }

//     async function fetchUserImages() {
//         let response = await Axios.get(`/api/user/getuserimages/${userId}`)
//         let images = response.data.images.filter(image => image.grow === growId)

//         console.log("images:   ", images)
//         // setGrowImages(images)

//         // return images.filter(image => image.grow === growId)
//         return images
//     }

//     async function getGrows() {
//         let response = await Axios.get(`/api/grow/`)
//         console.log(response)
//         return response.data
//     }

//     getGrows().then(grows => setGrows(grows))

//     // fetchUserImages().then(images => {
//     //     console.log("IMAGES:    ", images)
//     //     let filteredImages = images.filter(image => image.grow === growId)
//     //     console.log("filtered   ", filteredImages)
//     //     setGrowImages(filteredImages)
//     // }).catch(err => console.log(err))
//     // fetchUserImages().then(images => setGrowImages(images))
//     // .then(images => {
//     //     console.log("gowId from fetch:   ", growId)
//     //     let filteredImages = images.filter(image => image.grow === growId)
//     //     console.log("filtered   ", filteredImages)
//     //     setGrowImages(filteredImages)
//     // })

//     return (
//         <>
//             <LeftSliderBar {...props} />
//             <div className="align-me">

//                 {/* {growImages.map(image => (
//                     <Image key={image._id} style={styles.image} src={`https://project-three-logger-photos.s3.amazonaws.com/${image.s3Id}`} rounded />
//                 ))} */}

//             </div>
//         </>
//     );
// };

// export default ImagesPage;

import React, { useState, useEffect } from "react";
// import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import PhotoCarousel from '../../components/PhotoCarousel/PhotoCarousel'
import LeftSliderBar from '../../components/LeftSliderBar/LeftSliderBar'
import { Redirect } from 'react-router-dom'
import Axios from 'axios'

function ImagesPage(props) {

    const userId = localStorage.getItem('p3aajjkw-id')

    // const [user, setUser] = useState('')
    const [growId, setGrowId] = useState('')
    const [growImages, setGrowImages] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function fetchUser() {
            setLoading(true);
            let response = await Axios.get(`/api/user/profile`);
            let data = response.data
            setLoading(false)
            return data.user;
        }

        fetchUser().then(user => {
            if (!user._id) {
                return (
                    <Redirect to={'/'} />
                )
            }
            return user
        })
            .then(user => {
                console.log("user: ", user)
                let url = window.location.href

                if (url.indexOf("?grow_id=") !== -1) {
                    setGrowId(url.split("=")[1])
                } else {
                    setGrowId(user.defaultGrow)
                    console.log(user.defaultGrow)
                }
                return user
            })
    }, [])

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