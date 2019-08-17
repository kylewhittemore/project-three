import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';

export default function DailyLog(props) {

    return (

        <Form>
            <Form.Row className="m-1">
                <Col>
                    <Form.Group className="m-1" controlId="log.ControlInput1">
                        <Form.Label>Date:</Form.Label>
                        <Form.Control type="date" placeholder="name@example.com" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="m-1" controlId="exampleForm.ControlSelect1">
                        <Form.Label>Plant appearance:</Form.Label>
                        <Form.Control as="select">
                            <option>Happy</option>
                            <option>Neutral</option>
                            <option>Sad</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Form.Row>
            <Form.Row className="ml-2 m-1">
                <Col>
                    <Form.Group className="m-1" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Water" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="m-1" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Feed" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="m-1" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Transplant" />
                    </Form.Group>
                </Col>
            </Form.Row>
            <Col>
                <Form.Group className="m-1" controlId="log.ControlTextarea1">
                    <Form.Label>Notes:</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
            </Col>
            <Button className="m-2" variant="primary" type="submit">
                Submit
            </Button>
        </Form>

    )

}