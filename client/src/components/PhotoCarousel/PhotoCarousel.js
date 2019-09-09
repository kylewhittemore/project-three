import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Figure } from 'react-bootstrap/'
import Spinner from '../LoadingSpinner/LoadingSpinner'
import StackGrid, { transitions } from 'react-stack-grid';

const { scaleDown } = transitions;

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
                <StackGrid
                monitorImagesLoaded="false"
                columnWidth={300}
                duration={1000}
                gutterWidth={10}
                gutterHeight={10}
                easing={scaleDown.cubicOut}
                appearDelay={60}
                appear={scaleDown.appear}
                appeared={scaleDown.appeared}
                enter={scaleDown.enter}
                entered={scaleDown.entered}
                leaved={scaleDown.leaved}
                className="images"
              >
                {photos.map(photo => (
                  <Figure
                  className="my-auto"
                  >
                    <Figure.Image className="img-fluid my-auto" alt={photo.name} src={`https://project-three-logger-photos.s3.amazonaws.com/${photo.s3Id}`}>
                    </Figure.Image>
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