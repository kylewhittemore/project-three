import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Axios from 'axios'

export default function DailyLog(props) {

    const initialFormState = {
        date: "",
        plantAppearance: "happy",
        didWater: false,
        didFeed: false,
        didTransplant: false,
        notes: ""
    }

    const [formData, setFormData] = useState(initialFormState)

    async function postDailyLog() {

        // let newLog = {
        //     date: formData.date,
        //     plantAppearance: formData.plantAppearance,
        //     didWater: formData.didWater,
        //     didFeed: formData.didFeed,
        //     didTransplant: formData.didTransplant,
        //     notes: formData.notes
        // }

        // for the post route, for now it just posts to the bucket of logs
        // once the grow & users collections are established the line below will read:
        // let response = await Axios.post('api/daily/' + props.growId, newLog)
        let response = await Axios({
            method: 'post',
            url: '/api/daily',
            data: {
                date: formData.date,
                plantAppearance: formData.plantAppearance,
                didWater: formData.didWater,
                didFeed: formData.didFeed,
                didTransplant: formData.didTransplant,
                notes: formData.notes
            }
        })
        console.log(response)
        return response
    }

    async function handleFormSubmit(event) {
        event.preventDefault()
        // console.log(formData)
        await postDailyLog(formData)
        setFormData(initialFormState)
    }

    const handleInputChange = event => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        setFormData({ ...formData, [name]: value })
        // console.log(formData)
    }

    return (

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
                    <Form.Group className="m-1" controlId="formBasicCheckbox">
                        <Form.Check value={formData.didWater} name="didWater" onChange={handleInputChange} type="checkbox" label="Water" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="m-1" controlId="formBasicCheckbox">
                        <Form.Check value={formData.didFeed} name="didFeed" onChange={handleInputChange} type="checkbox" label="Feed" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="m-1" controlId="formBasicCheckbox">
                        <Form.Check value={formData.didTransplant} name="didTransplant" onChange={handleInputChange} type="checkbox" label="Transplant" />
                    </Form.Group>
                </Col>
            </Form.Row>
            <Col>
                <Form.Group className="m-1" controlId="log.ControlTextarea1">
                    <Form.Label>Notes:</Form.Label>
                    <Form.Control value={formData.notes} name="notes" onChange={handleInputChange} as="textarea" rows="3" />
                </Form.Group>
            </Col>
            <Button className="m-2" variant="primary" type="submit">
                Submit
            </Button>
        </Form>

    )
}