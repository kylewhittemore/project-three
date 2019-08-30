import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Carousel from 'react-bootstrap/Carousel'
import Spinner from '../LoadingSpinner/LoadingSpinner'

export default function PhotoCarousel(props) {

    const [photos, setPhotos] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function fetchGrow(id) {
            setLoading(true)
            let response = await Axios.get(`/api/grow/${id}`);
            return response.data
        }
        async function fetchUser(id) {
            setLoading(true)
            let response = await Axios.get(`/api/image/user/${id}`);
            return response.data
        }
        if (props.growId) {
            fetchGrow(props.growId).then(data => {
                console.log(data.images)
                setPhotos(data.images)
                setLoading(false)
            }).catch(err => console.log(err))
        } else {
            fetchUser(props.userId).then(data => {
                console.log(data.images)
                setPhotos(data.images)
                setLoading(false)
            }).catch(err => console.log(err))
        }
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
                                src={`https://grow-image-storage.s3.amazonaws.com/${photo.s3Id}`}
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