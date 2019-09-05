import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row'
import Spinner from '../LoadingSpinner/LoadingSpinner'
import Image from 'react-bootstrap/Image'
import Axios from 'axios'

export default function DailyLog(props) {

    const userId = localStorage.getItem('p3aajjkw-id')

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
        grow: '',
        season: props.defaultGrow
    }

    const [formData, setFormData] = useState('')
    const [inputImageData, setInputImageData] = useState(new FormData())
    const [loadingImage, setLoadingImage] = useState(false)
    const [imageUrl, setImageUrl] = useState('')
    const [imageName, setImageName] = useState('')
    const [dbPostImage, setDbPostImage] = useState({})
    const [image, setImage] = useState([])
    const [seasons, setSeasons] = useState([])
    const [growId, setGrowId] = useState(props.growId)

    useEffect(() => {

        async function fetchGrows() {
            let response = await Axios.get(`/api/grow/user/${userId}`);
            let data = response.data
            return data;
        }

        async function fetchLog(id) {
            let response = await Axios.get(`/api/daily/${id}`);
            let data = response.data
            return data;
        }
        async function setSeasonState() {
            let data = await fetchGrows()
            await setSeasons(data)
            return data
        }

        setSeasonState()

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
                    grow: data.grow,
                    caption: data.caption,
                    season: data.grow.seasonName
                }

                setFormData(form)
                console.log("data: ", data)
                setImage(data.image)
                data.image ?
                    setImageUrl(`https://project-three-logger-photos.s3.amazonaws.com/${data.image.s3Id}`)
                    :
                    setImageUrl('')
            }).catch(err => console.log(err))
        } else {
            setGrowId(props.defaultGrow)
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
                grow: props.growId,
                caption: '',
                season: props.defaultGrow
            }
            setFormData(form)
        }
    }, [props]);

    async function postDailyLog() {
        let data = formData
        data.grow = growId
        let response = await Axios.post(`/api/daily/${growId}`, data)

        return response
    }

    async function putDailyLog() {
        let response = await Axios({
            method: "PUT",
            url: `/api/daily/${props.logId}`,
            data: formData
        })
        //ensure that the response is the log if there are errors!!!!!!
        return response
    }

    async function handleFormSubmit(event) {
        event.preventDefault()
        let response = props.logId ? await putDailyLog() : await postDailyLog()

        let img = dbPostImage
        img.date = formData.date
        img.caption = formData.caption
        img.dailyLogId = response.data._id
        await setDbPostImage(img)

        setFormData(initialFormState)
        response.data.message ?
            console.log(response.data.message)
            :
            imageUrl ?
                handleImageDbPost()
                    .then(props.history.push('/'))
                :
                console.log('no image attached to log')
    }

    const handleInputChange = event => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        if (name === 'season') {

            let selectId = event.target[event.target.selectedIndex].getAttribute('data-id')

            setFormData({ ...formData, grow: selectId, season: target.value })
            setGrowId(selectId)

        } else {

            setFormData({ ...formData, [name]: value })

        }
    }

    const handleImageAttach = async event => {
        event.preventDefault();

        setLoadingImage(true)
        let apiResponse = await Axios.post('/api/image/s3', inputImageData)
        setLoadingImage(false)

        let img = {
            name: apiResponse.data.name,
            s3Id: apiResponse.data.s3Id,
            userId: props.userId,
            growId: growId
        }
        await setDbPostImage(img)
    }

    const handleImageDbPost = async () => {
        setLoadingImage(true)

        let dbResponse = await Axios.post('/api/image/db', dbPostImage)

        setImageUrl(`https://project-three-logger-photos.s3.amazonaws.com/${dbResponse.data.s3Id}`)
        setInputImageData(new FormData())
        setLoadingImage(false)

        return dbResponse
    }

    const handleUploadChange = async event => {
        const file = event.target.files[0]

        inputImageData.append('image', file)

        await setImageUrl(URL.createObjectURL(file))
        await setImageName(file.name)
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
                    <Col>
                        <Form.Group className="m-1" controlId="log.ControlSelect2">
                            <Form.Label>Season:</Form.Label>
                            <Form.Control value={formData.season} name="season" onChange={handleInputChange} as="select">
                                {seasons.map(season => <option data-id={season._id} >{season.seasonName}</option>)}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="m-1" controlId="log.ControlInput1">
                            <Form.Label>Hi temp</Form.Label>
                            <Form.Control value={formData.hiTemp} name="hiTemp" onChange={handleInputChange} type="number" />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row className="m-2">
                    <Col>
                        <Form.Group as={Col} className="m-1" controlId="formBasicCheckbox1">
                            <Form.Check name="didWater" checked={formData.didWater} onChange={handleInputChange} type="checkbox" label="Water" />
                        </Form.Group>

                        <Form.Group as={Col} className="m-1" controlId="formBasicCheckbox2">
                            <Form.Check name="didFeed" checked={formData.didFeed} onChange={handleInputChange} type="checkbox" label="Feed" />
                        </Form.Group>

                        <Form.Group as={Col} className="m-1" controlId="formBasicCheckbox3">
                            <Form.Check name="didTransplant" checked={formData.didTransplant} onChange={handleInputChange} type="checkbox" label="Transplant" />
                        </Form.Group>
                    </Col>
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
                    <Col>
                        <Form.Group className="m-1" controlId="log.ControlTextarea2">
                            <Form.Label>Image Caption:</Form.Label>
                            <Form.Control value={formData.caption} name="caption" onChange={handleInputChange} as="textarea" rows="2" />
                        </Form.Group>
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