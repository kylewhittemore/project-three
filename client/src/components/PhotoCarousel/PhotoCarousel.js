import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Carousel from 'react-bootstrap/Carousel'
import Spinner from '../LoadingSpinner/LoadingSpinner'

export default function PhotoCarousel(props) {

    const [photos, setPhotos] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        async function fetchUser(id) {
            setLoading(true)
            let response = await Axios.get(`/api/user/getuserimages/${id}`);
            return response.data
        }

        fetchUser(props.userId).then(data => {
            console.log(props.growId)
            let filteredImages = data.images.filter(image => image.grow === props.growId)
            console.log(filteredImages)
            setPhotos(filteredImages)
            setLoading(false)
        }).catch(err => console.log(err))

    }, [props]);

    return (
        <div>
            {loading ? <Spinner />
                :
                <Carousel className="col-md-8">
                    {photos.map(photo => (
                        <Carousel.Item key={photo._id}>
                            <img
                                className="d-block w-100"
                                src={`https://project-three-logger-photos.s3.amazonaws.com/${photo.s3Id}`}
                                alt={photo.name}
                            />
                            {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                        </Carousel.Item>
                    ))}
                </Carousel>
            }
        </div>
    )
}