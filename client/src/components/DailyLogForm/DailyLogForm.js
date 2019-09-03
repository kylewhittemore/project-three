import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row'
import Spinner from '../LoadingSpinner/LoadingSpinner'
import Image from 'react-bootstrap/Image'
import Axios from 'axios'

export default function DailyLog(props) {

    const styles = {
        image: {
            height: 171 + "px",
            // padding: 5 + "px"
        }
    }

    const initialFormState = {
        date: "",
        plantAppearance: "happy",
        didWater: false,
        didFeed: false,
        didTransplant: false,
        didFlush: false,
        didFlip: false,
        didDefoliate: false,
        notes: "",
        grow: ''
    }

    const [formData, setFormData] = useState('')
    const [inputImageData, setInputImageData] = useState(new FormData())
    const [loadingImage, setLoadingImage] = useState(false)
    const [imageUrl, setImageUrl] = useState('')
    const [imageName, setImageName] = useState('')
    const [dbPostImage, setDbPostImage] = useState({})

    // if (props.growId) {
    //     initialFormState.grow = props.growId
    //     console.log("IF GROW", initialFormState.grow)
    //     setFormData(initialFormState)
    // }


    useEffect(() => {

        async function fetchLog(id) {
            let response = await Axios.get(`/api/daily/${id}`);
            let data = response.data
            return data;
        }

        if (props.logId) {
            fetchLog(props.logId).then(data => {
                const form = {
                    date: data.date.slice(0, 10),
                    plantAppearance: data.plantAppearance,
                    didWater: data.didWater,
                    didFeed: data.didFeed,
                    didTransplant: data.didTransplant,
                    didFlush: data.didFlush,
                    didFlip: data.didFlip,
                    didDefoliate: data.didDefoliate,
                    notes: data.notes,
                    grow: data.grow
                }
                setFormData(form)
                console.log("data: ", data)
                data.images ?
                    setImageUrl(`https://project-three-logger-photos.s3.amazonaws.com/${data.images[0].s3Id}`)
                    :
                    setImageUrl('')
            }).catch(err => console.log(err))
        } else {
            // console.log("form Data: ", formData)
            const form = {
                date: "",
                plantAppearance: "happy",
                didWater: false,
                didFeed: false,
                didTransplant: false,
                didFlush: false,
                didFlip: false,
                didDefoliate: false,
                notes: "",
                grow: props.growId
            }
            setFormData(form)
        }
    }, [props]);

    async function postDailyLog() {
        let data = formData
        console.log("POST DATA: ", data)
        let response = await Axios.post(`/api/daily/${props.growId}`, data)
        return response
    }

    async function putDailyLog() {
        let response = await Axios({
            method: "PUT",
            url: `/api/daily/${props.logId}`,
            data: formData
        })
        return response
    }

    async function handleFormSubmit(event) {
        event.preventDefault()
        let response = props.logId ? await putDailyLog() : await postDailyLog()
        setFormData(initialFormState)
        response.data.message ?
            console.log(response.data.message)
            :
            imageUrl ? handleImageDbPost().then(response => {
                console.log("response from handle form: ", response)
                props.history.push('/')
            })
                :
                console.log('no image')
    }

    const handleInputChange = event => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        setFormData({ ...formData, [name]: value })
    }

    const handleImageAttach = async event => {
        event.preventDefault();
        setLoadingImage(true)
        let apiResponse = await Axios.post('/api/image/s3', inputImageData)
        setLoadingImage(false)
        console.log("API res: ", apiResponse)
        let img = {
            name: apiResponse.data.name,
            s3Id: apiResponse.data.s3Id,
            userId: props.userId,
            growId: props.growId,
            dailyLogId: props.logId
        }
        console.log(img)
        setDbPostImage(img)
    }

    const handleImageDbPost = async () => {
        setLoadingImage(true)
        let dbResponse = await Axios.post('/api/image/db', dbPostImage)
        console.log("DB res: ", dbResponse)
        setImageUrl(`https://project-three-logger-photos.s3.amazonaws.com/${dbResponse.data.s3Id}`)
        setInputImageData(new FormData())
        setLoadingImage(false)
        return dbResponse
    }

    const handleUploadChange = async event => {
        const file = event.target.files[0]
        inputImageData.append('image', file)
        setImageUrl(URL.createObjectURL(file))
        setImageName(file.name)
    }

    return (
        <>
            <Form onSubmit={handleFormSubmit} className="mx-auto">
                <Form.Row className="m-2">
                    <Form.Group as={Col} className="m-1" controlId="log.ControlInput1">
                        <Form.Label>Date:</Form.Label>
                        <Form.Control value={formData.date} name="date" onChange={handleInputChange} type="date" />
                    </Form.Group>

                    <Form.Group as={Col} className="m-1" controlId="log.ControlSelect1">
                        <Form.Label>Plant appearance:</Form.Label>
                        <Form.Control value={formData.plantAppearance} name="plantAppearance" onChange={handleInputChange} as="select">
                            <option>happy</option>
                            <option>neutral</option>
                            <option>sad</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Row className="m-2">
                    <Form.Group as={Col} className="m-1" controlId="formBasicCheckbox1">
                        <Form.Check name="didWater" checked={formData.didWater} onChange={handleInputChange} type="checkbox" label="Water" />
                    </Form.Group>

                    <Form.Group as={Col} className="m-1" controlId="formBasicCheckbox2">
                        <Form.Check name="didFeed" checked={formData.didFeed} onChange={handleInputChange} type="checkbox" label="Feed" />
                    </Form.Group>

                    <Form.Group as={Col} className="m-1" controlId="formBasicCheckbox3">
                        <Form.Check name="didTransplant" checked={formData.didTransplant} onChange={handleInputChange} type="checkbox" label="Transplant" />
                    </Form.Group>
                </Form.Row>

                <Form.Row className="m-2">
                    <Form.Group as={Col} className="m-1" controlId="formBasicCheckbox4">
                        <Form.Check name="didFlush" checked={formData.didFlush} onChange={handleInputChange} type="checkbox" label="Flush" />
                    </Form.Group>

                    <Form.Group as={Col} className="m-1" controlId="formBasicCheckbox5">
                        <Form.Check name="didFlip" checked={formData.didFlip} onChange={handleInputChange} type="checkbox" label="Flip to Flower" />
                    </Form.Group>

                    <Form.Group as={Col} className="m-1" controlId="formBasicCheckbox6">
                        <Form.Check name="didDefoliate" checked={formData.didDefoliate} onChange={handleInputChange} type="checkbox" label="Defoliate" />
                    </Form.Group>
                </Form.Row>

                <Form.Row className="m-2">
                    <Form.Group as={Col} className="m-1" controlId="log.ControlTextarea1">
                        <Form.Label>Notes:</Form.Label>
                        <Form.Control value={formData.notes} name="notes" onChange={handleInputChange} as="textarea" rows="3" />
                    </Form.Group>
                </Form.Row>

                <Form.Row className="m-2">
                    <Form.Group as={Col} className="m-1" controlId="log.ControlTextarea1">
                        {/* <Form.Label>upload:</Form.Label> */}
                        <div className="input-group my-4">
                            <div className="custom-file">
                                <input type="file" onChange={handleUploadChange} className="custom-file-input" id="inputGroupFile02" />
                                <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="inputGroupFileAddon02">{imageName ? imageName : "Choose file"}</label>
                            </div>
                            <div className="input-group-append">
                                <span className="input-group-text" onClick={handleImageAttach} id="inputGroupFileAddon02">Upload</span>
                            </div>
                        </div>
                    </Form.Group>
                </Form.Row>

                <Form.Row className="m-2">
                    <Col>
                        {
                            loadingImage ?
                                <Spinner />
                                :
                                <Image style={styles.image} src={imageUrl} rounded />
                        }
                    </Col>
                </Form.Row>

                <Form.Row className="m-2">
                    <Button className="m-2" variant="primary" type="submit">
                        Submit
                        </Button>
                </Form.Row>
            </Form>
            {/* 
            <Row className="m-2">
                <Col>
                    {
                        loadingImage ?
                            <Spinner />
                            :
                            <Image style={styles.image} src={imageUrl} thumbnail />
                    }
                </Col>
            </Row> */}
        </>

    )
}