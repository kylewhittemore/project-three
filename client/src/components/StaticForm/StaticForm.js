import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import "./style.css";

export default function StaticForm() {

    return (
        <div>

        <Form className="mx-5 my-5">
            <Form.Row>
                <Form.Group as={Col} controlId="log.ControlInput1">
                    <Form.Label>Season Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="log.ControlInput2">
                    <Form.Label>Date:</Form.Label>
                    <Form.Control type="date" />
                </Form.Group>
                <Form.Group as={Col} controlId="log.ControlInput3">
                    <Form.Label>Planned Harvest Date:</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="log.ControlInput4">
                    <Form.Label>Strain Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Strain" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="log.ControlInput5">
                    <Form.Label>Lineage:</Form.Label>
                    <Form.Control type="text" /> X <Form.Control type="text" />
                </Form.Group>

                <Form.Group as={Col} id="formGridCheckbox">
                    <Form.Check type="checkbox" label="N/A" />
                </Form.Group>

                <Form.Group as={Col} id="log.ControlInput6">
                    <Form.Label>Flowering Time:</Form.Label>
                    <Form.Control type="text" /> Days
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="log.ControlInput7">
                    <Form.Label>Breeder:</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group as={Col} id="formGridCheckbox">
                    <Form.Check type="checkbox" label="N/A" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Seeds" />
                </Form.Group>

                <Form.Group as={Col} id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Clones" />
                </Form.Group>

                <Form.Group as={Col} controlId="log.ControlInput8">
                    <Form.Label>Number of Plants:</Form.Label>
                    <Form.Control type="number" />
                </Form.Group>

                <Form.Group as={Col} controlId="log.ControlSelect1">
                    <Form.Label>Medium:</Form.Label>
                    <Form.Control as="select">
                        <option>Soil</option>
                        <option>Coco</option>
                        <option>Rockwool</option>
                        <option>Nutrient Film Technique (NFT)</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="log.ControlSelect2">
                    <Form.Label>Veg Lighting Type:</Form.Label>
                    <Form.Control as="select">
                        <option>CFL</option>
                        <option>T5 Flourescent</option>
                        <option>Ceramic Metal Halide (CMH)</option>
                        <option>High Pressure Sodium (HPS)</option>
                        <option>Light Emitting Diode (LED)</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="log.ControlInput9">
                    <Form.Label>Veg Wattage:</Form.Label>
                    <Form.Control type="number" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="log.ControlSelect3">
                    <Form.Label>Flower Lighting Type:</Form.Label>
                    <Form.Control as="select">
                        <option>CFL</option>
                        <option>T5 Flourescent</option>
                        <option>Ceramic Metal Halide (CMH)</option>
                        <option>High Pressure Sodium (HPS)</option>
                        <option>Light Emitting Diode (LED)</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="log.ControlInput10">
                    <Form.Label>Flower Wattage:</Form.Label>
                    <Form.Control type="number" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group controlId="log.ControlTextarea1">
                    <Form.Label>Lighting Notes</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group controlId="log.ControlSelect4">
                    <Form.Label>Canopy Technique:</Form.Label>
                    <Form.Control as="select">
                        <option>Horizontal</option>
                        <option>Vertical</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group controlId="log.ControlTextarea2">
                    <Form.Label>Canopy Technique Notes:</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="Example: Scrog net used for flat, even horizontal canopy./No net or low-stress training used" />
                </Form.Group>
            </Form.Row>

            <Button variant="outline" type="submit">
                Submit
            </Button>
        </Form>
        </div>
    );

};