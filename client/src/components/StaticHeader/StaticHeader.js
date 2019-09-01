import React, { Component } from 'react';
import Axios from 'axios';
import Moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Row, Col, Button, Figure } from 'react-bootstrap';


class StaticHeader extends Component {

    constructor(props) {
        super(props);
        this.state = { isOn: true };
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
        coverImage: "",
        loading: false
        // user: "5d60ad3ce54ff902983c41dd"
        // redirect: false
    };

    // async editForm(event) {
    //     event.preventDefault();
    //     console.log("hi!")
    //     if (this.props.growId) {
    //         console.log("grow id:" , this.props.growId);
    //         let response = await Axios.get(`/api/grow/${this.props.growId}`);
    //         console.log(response);
    //         let data = response.data;
    //         this.setState({
    //             seasonName: data.seasonName,
    //             dateStarted: data.dateStarted.slice(0, 10),
    //             dateCompleted: data.dateCompleted.slice(0, 10),
    //             strainName: data.strainName,
    //             lineage: data.lineage,
    //             floweringTime: data.floweringTime,
    //             breeder: data.breeder,
    //             starterPlantType: data.starterPlantType,
    //             numPlants: data.numPlants,
    //             medium: data.medium,
    //             vegLightType: data.vegLightType,
    //             vegLightWattage: data.vegLightWattage,
    //             flowerLightType: data.flowerLightType,
    //             flowerLightWattage: data.flowerLightWattage,
    //             lightNotes: data.lightNotes,
    //             canopyTechnique: data.canopyTechnique,
    //             canopyTechniqueNotes: data.canopyTechniqueNotes
    //         });
    //         console.log("router", this.props.router)
    //         await this.props.history.push(`grow/${this.props.growId}`)
    //     };
    // };



    async componentDidMount() {
        this.setState({ loading: true })
        let response = await Axios.get(`/api/grow/${this.props.growId}`);
        this.setState({ loading: false })
        console.log("componentDidMount:" , response);
        let data = response.data;
        this.setState({
            seasonName: data.seasonName,
            dateStarted: Moment(data.dateStarted.slice(0, 10)).format("MM-DD-YYYY"),
            dateCompleted: Moment(data.dateCompleted.slice(0, 10)).format("MM-DD-YYYY"),
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
            canopyTechniqueNotes: data.canopyTechniqueNotes,
            coverImage: data.coverImage
        });
        console.log("DATA", data.coverImage)
    };

    render() {

        return (
            <div>
                {this.state.loading ? <div>loading</div>
                    :
                    <Container>
                        <Row>
                            <Col className="text-right">
                                <Button onClick={event => {
                                    event.preventDefault()
                                    console.log("history", this.props.history)
                                    this.props.history.push(`/newseason/?grow_id=${this.props.growId}`)
                                }} variant="outline-dark" size="sm">Edit</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h2 className="text-center">{this.state.seasonName}</h2>
                            </Col>
                        </Row>

                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={`https://project-three-logger-photos.s3.amazonaws.com/${this.state.coverImage}`}
                            >
                            </Figure.Image>
                        </Figure>

                        <Row>
                            <Col lg={6} className="text-center">
                                <p><strong>Date Started: </strong>{this.state.dateStarted}</p>
                            </Col>
                            <Col lg={6} className="text-center">
                                <p><strong>Date Completed: </strong>{this.state.dateCompleted}</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={3} className="text-center">
                                <p><strong>Breeder: </strong>{this.state.breeder}</p>
                            </Col>
                            <Col lg={3} className="text-center">
                                <p><strong>Strain: </strong>{this.state.strainName}</p>
                            </Col>
                            <Col lg={3} className="text-center">
                                <p><strong>Lineage: </strong>{this.state.lineage}</p>
                            </Col>
                            <Col lg={3} className="text-center">
                                <p><strong>Flowering Time: </strong>{this.state.floweringTime} Days</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={4} className="text-center">
                                <p><strong>Starter Plant Type: </strong>{this.state.starterPlantType}</p>
                            </Col>
                            <Col lg={4} className="text-center">
                                <p><strong>Number of Plants: </strong>{this.state.numPlants}</p>
                            </Col>
                            <Col lg={4} className="text-center">
                                <p><strong>Medium: </strong>{this.state.medium}</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={3} className="text-center">
                                <p><strong>Veg Light Type: </strong>{this.state.vegLightType}</p>
                            </Col>
                            <Col lg={3} className="text-center">
                                <p><strong>Veg Light Wattage: </strong>{this.state.vegLightWattage} Watts</p>
                            </Col>
                            <Col lg={3} className="text-center">
                                <p><strong>Flower Light Type: </strong>{this.state.flowerLightType}</p>
                            </Col>
                            <Col lg={3} className="text-center">
                                <p><strong>Flower Light Wattage: </strong>{this.state.flowerLightWattage} Watts</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="text-center">
                                <p><strong>Lighting Notes: </strong>{this.state.lightNotes}</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={6} className="text-center">
                                <p><strong>Canopy Technique: </strong>{this.state.canopyTechnique}</p>
                            </Col>
                            <Col lg={6} className="text-center">
                                <p><strong>Canopy Technique Notes: </strong>{this.state.canopyTechniqueNotes}</p>
                            </Col>
                        </Row>

                    </Container>
                }
            </div>
        )

    };

};

export default StaticHeader;