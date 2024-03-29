import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row'
import Spinner from '../LoadingSpinner/LoadingSpinner'
import Image from 'react-bootstrap/Image'
import Axios from 'axios'


export default function AddPhotos(props) {

    const [images, setImages] = useState([])
    const [inputImageData, setInputImageData] = useState(new FormData())
    const [loadingImage, setLoadingImage] = useState(false)
    const [imageUrl, setImageUrl] = useState('')
    const [imageName, setImageName] = useState('')

    const styles = {
        image: {
            height: 271 + "px",
        }
    }

    useEffect(() => {
        setImageUrl(`https://project-three-logger-photos.s3.amazonaws.com/${props.coverImage}`)
        //consider adding a setInputImageData        
    }, [props]);

    console.log(props)
    console.log(`https://project-three-logger-photos.s3.amazonaws.com/${props.coverImage}`)

    const handleImageAttach = async event => {
        event.preventDefault();
        setLoadingImage(true)
        let apiResponse = await Axios.post('/api/image/s3', inputImageData)
        setInputImageData(new FormData())
        setLoadingImage(false)
        console.log("API res: ", apiResponse)
        let img = {
            name: apiResponse.data.name,
            s3Id: apiResponse.data.s3Id,
            userId: props.userId,
            growId: props.growId,
            dailyLogId: props.logId
        }
        props.updateCoverImage(apiResponse.data.s3Id)
        return img
    }

    const handleImageDbPost = async img => {
        setLoadingImage(true)
        let dbResponse = await Axios.post('/api/image/headerimage', img)

        console.log("DB res: ", dbResponse)

        setImageUrl(`https://project-three-logger-photos.s3.amazonaws.com/${dbResponse.data.s3Id}`)
        // setInputImageData(new FormData())
        setLoadingImage(false)
        setImages([...images, imageUrl])
        return dbResponse
    }

    const handleUploadChange = async event => {
        const file = event.target.files[0]
        inputImageData.append('image', file)
        setImageUrl(URL.createObjectURL(file))
        setImageName(file.name)
    }


    return (
        <div>
            <Form.Row>
                <Form.Group as={Col} controlId="log.ControlTextarea1">
                    <div className="input-group">
                        <div className="custom-file">
                            <input type="file" onChange={handleUploadChange} className="custom-file-input" id="inputGroupFile02" />
                            <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="inputGroupFileAddon02">{imageName ? imageName : "Choose file"}</label>
                        </div>
                        <div className="input-group-append">
                            <span className="input-group-text" onClick={event => {
                                handleImageAttach(event)
                                    .then(response => {
                                        console.log('handleImageAttach res: ', response)
                                    })
                                    // .then(response => {
                                    //     handleImageDbPost(response)
                                    //         .then(response => console.log(response))
                                    //         .catch(err => console.log(err))
                                    // })
                                    .catch(err => console.log(err))

                            }} id="inputGroupFileAddon02">Upload</span>
                        </div>
                    </div>
                </Form.Group>
            </Form.Row>
            <Form.Row>

                {
                    loadingImage ?
                        <Spinner />
                        :
                        <Form.Group as={Col}>
                            {imageUrl ? <Image style={styles.image} src={imageUrl} rounded /> : <div>no image</div>}
                        </Form.Group>

                }
            </Form.Row>
        </div>
    )

}