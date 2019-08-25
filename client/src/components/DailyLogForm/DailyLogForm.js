import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Axios from 'axios'
import { Link, Redirect } from "react-router-dom";



export default function DailyLog(props) {

    // empty form object to set formData state to after submission
    const initialFormState = {
        date: "",
        plantAppearance: "happy",
        didWater: false,
        didFeed: false,
        didTransplant: false,
        didFlush: false,
        didFlip: false,
        didDefoliate: false,
        notes: ""
    }

    // This is where the component's formData state and its updater 
    // are defined with the'useState' hook
    const [formData, setFormData] = useState(initialFormState)
    const [imageS3Id, setImageS3Id] = useState('')

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
                    // grow: props.growId
                }
                setFormData(form)
            }).catch(err => console.log(err))
        }
    }, [props]);

    async function postDailyLog() {
        console.log("***********", props.growId)
        let data = formData
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
        console.log(response)
        setFormData(initialFormState)
        // setRedirect(true)
        response.data.message ? console.log(response.data.message)
            :
            props.history.push('/')
    }

    const handleInputChange = event => {
        // event.preventDefault()
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        setFormData({ ...formData, [name]: value })
    }

    const handleUploadChange = async event => {
        const target = event.target
        console.log(target.files[0].name)
        const thisFormData = new FormData();
        thisFormData.append('image', target.files[0])
        let apiResponse = await Axios.post('/api/image/s3', thisFormData)
        // event.target.value = ''
        let img = {
            name: apiResponse.data.image.name,
            s3Id: apiResponse.data.image.s3Id,
            userId: props.userId,
            growId: props.growId,
            dailyLogId: props.logId
        }

        let dbResponse = await Axios.post('/api/image/db', img)
        console.log(dbResponse)
    }

    return (
        <>
            <Form onSubmit={handleFormSubmit}>
                <Form.Row className="m-1">
                    <Col>
                        <Form.Group className="m-1" controlId="log.ControlInput1">
                            <Form.Label>Date:</Form.Label>
                            <Form.Control value={formData.date} name="date" onChange={handleInputChange} type="date" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="m-1" controlId="log.ControlSelect1">
                            <Form.Label>Plant appearance:</Form.Label>
                            <Form.Control value={formData.plantAppearance} name="plantAppearance" onChange={handleInputChange} as="select">
                                <option>happy</option>
                                <option>neutral</option>
                                <option>sad</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row className="ml-2 m-1">
                    <Col>
                        <Form.Group className="m-1" controlId="formBasicCheckbox1">
                            <Form.Check name="didWater" checked={formData.didWater} onChange={handleInputChange} type="checkbox" label="Water" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="m-1" controlId="formBasicCheckbox2">
                            <Form.Check name="didFeed" checked={formData.didFeed} onChange={handleInputChange} type="checkbox" label="Feed" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="m-1" controlId="formBasicCheckbox3">
                            <Form.Check name="didTransplant" checked={formData.didTransplant} onChange={handleInputChange} type="checkbox" label="Transplant" />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group className="m-1" controlId="formBasicCheckbox4">
                            <Form.Check name="didFlush" checked={formData.didFlush} onChange={handleInputChange} type="checkbox" label="Flush" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="m-1" controlId="formBasicCheckbox5">
                            <Form.Check name="didFlip" checked={formData.didFlip} onChange={handleInputChange} type="checkbox" label="Flip to Flower" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="m-1" controlId="formBasicCheckbox6">
                            <Form.Check name="didDefoliate" checked={formData.didDefoliate} onChange={handleInputChange} type="checkbox" label="Defoliate" />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Col>
                    <Form.Group className="m-1" controlId="log.ControlTextarea1">
                        <Form.Label>Notes:</Form.Label>
                        <Form.Control value={formData.notes} name="notes" onChange={handleInputChange} as="textarea" rows="3" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="m-1" controlId="log.ControlTextarea1">
                        <Form.Label>upload:</Form.Label>
                        <input type="file" id="single" onChange={handleUploadChange} />
                    </Form.Group>
                </Col>
                <Button className="m-2" variant="primary" type="submit">
                    Submit
            </Button>
            </Form>
                      
            <img src={`https://grow-image-storage.s3.amazonaws.com/${imageS3Id}`} />
        </>
    )
}