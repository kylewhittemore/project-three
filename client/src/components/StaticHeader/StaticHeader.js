import React, { Component } from 'react';
import Axios from 'axios';
import Moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Row, Col, Button, Figure } from 'react-bootstrap';
import DailyLogTable from '../DailyLogTable/DailyLogTable';


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
        console.log("componentDidMount:", response);
        let data = response.data;
        this.setState({
            seasonName: data.seasonName,
            dateStarted: data.dateStarted ? Moment(data.dateStarted.slice(0, 10)).format("MM-DD-YYYY") : '',
            dateCompleted: data.dateCompleted ? Moment(data.dateCompleted.slice(0, 10)).format("MM-DD-YYYY") : '',
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
                    <Container className="staticHeaderPage mx-auto">
                        <Row>
                            <Col className="mx-auto text-center">
                                <h2 className="text-capitalize">{this.state.seasonName}</h2>
                            </Col>
                            <Col className="text-right">
                                <Button className="text-right btn-info"
                                    onClick={event => {
                                        event.preventDefault()
                                        console.log("history", this.props.history)
                                        this.props.history.push(`/newseason/?grow_id=${this.props.growId}`)
                                    }} variant="outline-light" size="sm">Edit</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Figure>
                                    <Figure.Image
                                        // width={171}
                                        // height={180}
                                        alt="171x180"
                                        src={`https://project-three-logger-photos.s3.amazonaws.com/${this.state.coverImage}`}
                                    >
                                    </Figure.Image>
                                </Figure>
                            </Col>
                            <Row>
                                <Col >
                                    <p><strong>Date Started: </strong>{this.state.dateStarted}</p>
                                    <p><strong>Date Completed: </strong>{this.state.dateCompleted}</p>
                                    <p><strong>Breeder: </strong>{this.state.breeder}</p>
                                    <p><strong>Veg Light Type: </strong>{this.state.vegLightType}</p>
                                    <p><strong>Veg Light Wattage: </strong>{this.state.vegLightWattage} Watts</p>


                                </Col>
                                <Col>
                                    <p><strong>Strain: </strong>{this.state.strainName}</p>
                                    <p><strong>Lineage: </strong>{this.state.lineage}</p>
                                    <p><strong>Flowering Time: </strong>{this.state.floweringTime} Days</p>
                                    <p><strong>Flower Light Type: </strong>{this.state.flowerLightType}</p>
                                    <p><strong>Flower Light Wattage: </strong>{this.state.flowerLightWattage} Watts</p>
                                </Col>
                                <Col >
                                    <p><strong>Starter Plant Type: </strong>{this.state.starterPlantType}</p>
                                    <p><strong>Number of Plants: </strong>{this.state.numPlants}</p>
                                    <p><strong>Medium: </strong>{this.state.medium}</p>
                                    <p><strong>Canopy Technique: </strong>{this.state.canopyTechnique}</p>
                                    <p><strong>Lighting Notes: </strong>{this.state.lightNotes}</p>

                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p><strong>Canopy Technique Notes: </strong>{this.state.canopyTechniqueNotes}</p>
                                </Col>
                            </Row>
                        </Row>
                    </Container>
                }
            </div>
        )

    };

};

export default StaticHeader;