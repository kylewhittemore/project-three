import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Carousel, Figure } from 'react-bootstrap'
import Spinner from '../LoadingSpinner/LoadingSpinner'
import StackGrid, { transitions, easings } from 'react-stack-grid';

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

    const transition = transitions.scaleDown;

    return (
        <div>
            {loading ? <Spinner />
                :
                <StackGrid
                monitorImagesLoaded
                columnWidth={300}
                duration={600}
                gutterWidth={15}
                gutterHeight={15}
                easing={easings.cubicOut}
                appearDelay={60}
                appear={transition.appear}
                appeared={transition.appeared}
                enter={transition.enter}
                entered={transition.entered}
                leaved={transition.leaved}
              >
                {photos.map(photo => (
                  <Figure
                    key={photo.s3Id}
                    className="image"
                  >
                    <Figure.Image className="img-fluid" alt={photo.name} src={`https://project-three-logger-photos.s3.amazonaws.com/${photo.s3Id}`} />
                    <Figure.Caption>{photo.caption}</Figure.Caption>
                  </Figure>
                ))}
              </StackGrid>
      
                // <Carousel className="col-md-8">
                //     {photos.map(photo => (
                //         <Carousel.Item key={photo._id}>
                //             <img
                //                 className="d-block w-100"
                //                 src={`https://project-three-logger-photos.s3.amazonaws.com/${photo.s3Id}`}
                //                 alt={photo.name}
                //             />
                //             <Carousel.Caption>
                //                 <h3>{photo.date}</h3>
                //                 <p>{photo.caption}</p>
                //             </Carousel.Caption>
                //         </Carousel.Item>
                //     ))}
                // </Carousel>
            }
        </div>
    )
}