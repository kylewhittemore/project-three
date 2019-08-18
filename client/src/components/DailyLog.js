import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Axios from 'axios'

export default function DailyLog(props) {

    // This is a functional, stateful component.  
    // It is using the 'useState' hook to avoid requiring a class-based component
    // The relevant state for this component is 'formData' and its updater is 'setFormdata'

    // empty form object to set formData state to after submission
    const initialFormState = {
        date: "",
        plantAppearance: "happy",
        didWater: false,
        didFeed: false,
        didTransplant: false,
        notes: ""
    }

    // This is where the component's formData state and its updater 
    // are defined with the'useState' hook
    const [formData, setFormData] = useState(initialFormState)

    
    async function postDailyLog() {
        // for the post route, for now it just posts to the bucket of logs
        // once the grow & users collections are established the line below will read:
        // let response = await Axios.post('api/daily/' + props.growId, newLog) or similar
        let response = await Axios.post('/api/dailylogs', formData)
        return response
    }

    async function handleFormSubmit(event) {
        event.preventDefault()
        let response = await postDailyLog(formData)
        console.log(response)
        setFormData(initialFormState)
    }

    const handleInputChange = event => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        setFormData({ ...formData, [name]: value })
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