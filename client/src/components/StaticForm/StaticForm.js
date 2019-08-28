import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Axios from "axios";
import "./style.css";

class StaticForm extends Component {

    constructor(props) {
        super(props);
        // this.state = { isOn: true };
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    };

    // State below set to blank for all neccessary database inputs.
    state = {
        seasonName: "",
        dateStarted: "",
        dateCompleted: "",
        strainName: "",
        lineage: "",
        floweringTime: "",
        breeder: "",
        starterPlantType: "",
        numPlants: "",
        medium: "",
        vegLightType: "",
        vegLightWattage: "",
        flowerLightType: "",
        flowerLightWattage: "",
        lightNotes: "",
        canopyTechnique: "",
        canopyTechniqueNotes: "",
        // user: "5d60ad3ce54ff902983c41dd"
        // redirect: false
    };

    //after form has shown, if a growId is passed, then populate the static information from the database to allow the user to add/edit information.
    async componentDidMount() {
        if (this.props.growId) {
            console.log(this.props.growId);
            let response = await Axios.get(`/api/grow/${this.props.growId}`);
            console.log(response);
            let data = response.data;

            // The two lines below aviod an error if there is no date saved on the log
            data.dateStarted ? data.dateStarted = data.dateStarted.slice(0,10) : data.dateStarted = ''
            data.dateStarted ? data.dateStarted = data.dateStarted.slice(0,10) : data.dateStarted = ''

            // this.setState(data)
            this.setState({
                seasonName: data.seasonName,
                dateStarted: data.dateStarted.slice(0, 10),
                dateCompleted: data.dateCompleted.slice(0, 10),
                strainName: data.strainName,
                lineage: data.lineage,
                floweringTime: data.floweringTime,
                breeder: data.breeder,
                starterPlantType: data.starterPlantType,
                numPlants: data.numPlants,
                medium: data.medium,
                vegLightType: data.vegLightType,
                vegLightWattage: data.vegLightWattage,
                flowerLightType: data.flowerLightType,
                flowerLightWattage: data.flowerLightWattage,
                lightNotes: data.lightNotes,
                canopyTechnique: data.canopyTechnique,
                canopyTechniqueNotes: data.canopyTechniqueNotes
            });
        };
        console.log(this.props.userId)
    };

    async putSeasonStatic() {
        let response = await Axios({
            method: "PUT",
            url: `/api/grow/${this.props.growId}`,
            data: this.state
        })

        return response
    }

    // function set to post input to the database.
    async postNewSeasonStatic(formData) {
        let response = await Axios.post(`/api/grow/${this.props.userId}`, formData)
        console.log(response)
        return response

    };

    // setting each states value when the input is changed
    handleInputChange = event => {
        let target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    };

    // submitting the information in the form to the database
    async handleFormSubmit(event) {
        event.preventDefault();

        // variable used to reference this.state
        let formData = this.state;

        // passing the values in each state to the postNewSeasonStatic function so the function can push the info to the database
        // let response = await this.postNewSeasonStatic(formData)
        let response = this.props.growId ? await this.putSeasonStatic() : await this.postNewSeasonStatic(formData)

        response.data.message ? console.log(".then response", response.data.message)
        :
        // this.setState({ redirect: true })
        this.props.history.push('/')


        // console.log to see that the state is taking in the forms value.
        console.log(this.state.floweringTime);
        // let response = this.props.growId ? await this.putSeasonStatic() : await this.postNewSeasonStatic()
        // console.log("form submit response: ", response)

        // reset the state back to it's original "state"
        this.setState({
            seasonName: "",
            dateStarted: "",
            dateCompleted: "",
            strainName: "",
            lineage: "",
            floweringTime: "",
            breeder: "",
            starterPlantType: "",
            numPlants: "",
            medium: "",
            vegLightType: "",
            vegLightWattage: "",
            flowerLightType: "",
            flowerLightWattage: "",
            lightNotes: "",
            canopyTechnique: "",
            canopyTechniqueNotes: "",

            // user: ""
        });
    };

    render() {

        return (

            <div>

                <Form className="mx-5 my-5">
                    <Form.Row>
                        <Form.Group as={Col} controlId="log.ControlInput1">
                            <Form.Label>Season Name:</Form.Label>
                            <Form.Control name="seasonName" value={this.state.seasonName} onChange={this.handleInputChange} type="text" placeholder="Enter Name" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="log.ControlInput2">
                            <Form.Label>Date:</Form.Label>
                            <Form.Control name="dateStarted" value={this.state.dateStarted} onChange={this.handleInputChange} type="date" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="log.ControlInput3">
                            <Form.Label>Planned Harvest Date:</Form.Label>
                            <Form.Control name="dateCompleted" value={this.state.dateCompleted} onChange={this.handleInputChange} type="date" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="log.ControlInput4">
                            <Form.Label>Strain Name:</Form.Label>
                            <Form.Control name="strainName" value={this.state.strainName} onChange={this.handleInputChange} type="text" placeholder="Enter Strain" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="log.ControlInput5">
                            <Form.Label>Lineage:</Form.Label>
                            <Form.Control name="lineage" value={this.state.lineage} onChange={this.handleInputChange} type="text" />
                        </Form.Group>

                        <Form.Group as={Col} id="log.ControlInput6">
                            <Form.Label>Flowering Time (Days):</Form.Label>
                            <Form.Control name="floweringTime" value={this.state.floweringTime} onChange={this.handleInputChange} type="number" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="log.ControlInput7">
                            <Form.Label>Breeder:</Form.Label>
                            <Form.Control name="breeder" value={this.state.breeder} onChange={this.handleInputChange} type="text" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="log.ControlSelect3">
                            <Form.Label>Starting Plant Type:</Form.Label>
                            <Form.Control name="starterPlantType" value={this.state.starterPlantType} onChange={this.handleInputChange} as="select">
                                <option>(Select)</option>
                                <option>Seeds</option>
                                <option>Clones</option>
                                <option>Teens</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="log.ControlInput8">
                            <Form.Label>Number of Plants:</Form.Label>
                            <Form.Control name="numPlants" value={this.state.numPlants} onChange={this.handleInputChange} type="number" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="log.ControlSelect1">
                            <Form.Label>Medium:</Form.Label>
                            <Form.Control name="medium" value={this.state.medium} onChange={this.handleInputChange} as="select">
                                <option>(Select)</option>
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
                            <Form.Control name="vegLightType" value={this.state.vegLightType} onChange={this.handleInputChange} as="select">
                                <option>(Select)</option>
                                <option>CFL</option>
                                <option>T5 Flourescent</option>
                                <option>Ceramic Metal Halide (CMH)</option>
                                <option>High Pressure Sodium (HPS)</option>
                                <option>Light Emitting Diode (LED)</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="log.ControlInput9">
                            <Form.Label>Veg Wattage:</Form.Label>
                            <Form.Control name="vegLightWattage" value={this.state.vegLightWattage} onChange={this.handleInputChange} type="number" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="log.ControlSelect3">
                            <Form.Label>Flower Lighting Type:</Form.Label>
                            <Form.Control name="flowerLightType" value={this.state.flowerLightType} onChange={this.handleInputChange} as="select">
                                <option>(Select)</option>
                                <option>CFL</option>
                                <option>T5 Flourescent</option>
                                <option>Ceramic Metal Halide (CMH)</option>
                                <option>High Pressure Sodium (HPS)</option>
                                <option>Light Emitting Diode (LED)</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="log.ControlInput10">
                            <Form.Label>Flower Wattage:</Form.Label>
                            <Form.Control name="flowerLightWattage" value={this.state.flowerLightWattage} onChange={this.handleInputChange} type="number" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group controlId="log.ControlTextarea1">
                            <Form.Label>Lighting Notes</Form.Label>
                            <Form.Control name="lightNotes" value={this.state.lightNotes} onChange={this.handleInputChange} as="textarea" rows="3" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group controlId="log.ControlSelect4">
                            <Form.Label>Canopy Technique:</Form.Label>
                            <Form.Control name="canopyTechnique" value={this.state.canopyTechnique} onChange={this.handleInputChange} as="select">
                                <option>(Select)</option>
                                <option>Horizontal</option>
                                <option>Vertical</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group controlId="log.ControlTextarea2">
                            <Form.Label>Canopy Technique Notes:</Form.Label>
                            <Form.Control name="canopyTechniqueNotes" value={this.state.canopyTechniqueNotes} onChange={this.handleInputChange} as="textarea" rows="3" placeholder="Example: Scrog net used for flat, even horizontal canopy./No net or low-stress training used" />
                        </Form.Group>
                    </Form.Row>

                    <Button onClick={this.handleFormSubmit} variant="outline-success" type="submit">
                        Submit
            </Button>
                </Form>
            </div>
        );
    };
};

export default StaticForm;