import React, { Component } from 'react';
import Axios from 'axios';
import Moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Figure } from 'react-bootstrap';
import fmt from '../../utils/formatTime';
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

        function formatMonDateShort(date) {
            return fmt.shortMonFmt(date);
        };

        return (
            <div>
                {this.state.loading ? <div>loading</div>
                    :
                    <Container className="staticHeaderContainer mx-auto">
                        <Row>
                            <Col md="8" className="mx-auto text-left">
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
                            <Col md="2" className="my-auto">
                                <Figure className="my-auto staticImage">
                                    <Figure.Image
                                        // width={171}
                                        // height={180}
                                        className="img-fluid img-thumbnail"
                                        alt="171x180"
                                        src={`https://project-three-logger-photos.s3.amazonaws.com/${this.state.coverImage}`}
                                    >
                                    </Figure.Image>
                                </Figure>
                            </Col>
                            {/* <Row> */}
                            <Col md="3" className="my-auto">
                                <p className="my-1 dashInfo"><strong className="dashInfoTitle">Started: </strong>{formatMonDateShort(this.state.dateStarted)}</p>
                                <p className="my-1 dashInfo"><strong className="dashInfoTitle">Harvest: </strong>{formatMonDateShort(this.state.dateCompleted)}</p>
                                <p className="my-1 dashInfo"><strong className="dashInfoTitle">Flowering Time: </strong>{this.state.floweringTime} Days</p>
                                <p className="my-1 dashInfo"><strong className="dashInfoTitle">Medium: </strong>{this.state.medium}</p>

                            </Col>
                            <Col md="6" className="my-auto">
                                <p className="my-1 dashInfo"><strong className="dashInfoTitle">Strain: </strong>{this.state.strainName}</p>
                                <p className="my-1 dashInfo"><strong className="dashInfoTitle">Lineage: </strong>{this.state.lineage}</p>
                                <p className="my-1 dashInfo ellipses"><strong className="dashInfoTitle">Breeder: </strong>{this.state.breeder}</p>
                                <p className="my-1 dashInfo"><strong className="dashInfoTitle">Starter Plant Type: </strong>{this.state.numPlants} {this.state.starterPlantType}</p>

                            </Col>
                            {/* <Col xs="3">
                                

                            </Col> */}
                        </Row>
                        <Row>
                            <h5 className="mx-auto">Environment and Lighting Details</h5>
                        </Row>
                        <Row>
                            <Col md="4">
                                <p className="my-1 dashInfo"><strong className="dashInfoTitle">Veg Light: </strong>{this.state.vegLightWattage} Watt {this.state.vegLightType}</p>
                                <p className="my-1 dashInfo"><strong className="dashInfoTitle">Flower Light: </strong>{this.state.flowerLightWattage} Watt {this.state.flowerLightType}</p>
                                <p className="my-1 dashInfo"><strong className="dashInfoTitle">Canopy Technique: </strong>{this.state.canopyTechnique}</p>

                                {/* <p className="my-1 dashInfo"><strong className="dashInfoTitle">Veg Light Wattage: </strong></p> */}
                            </Col>
                            <Col md="4">
                            <p className="my-1 dashInfo"><strong className="dashInfoTitle">Lighting Notes: </strong>{this.state.lightNotes}</p>

                                {/* <p className="my-1 dashInfo"><strong className="dashInfoTitle">Flower Light Wattage: </strong></p> */}
                            </Col>
                            <Col md="4">

                                <p className="my-1 dashInfo"><strong className="dashInfoTitle">Canopy Technique Notes: </strong>{this.state.canopyTechniqueNotes}</p>
                            </Col>
                            {/* <Col xs="3">

                            </Col> */}
                        </Row>
                    </Container>
                }
            </div>
        )

    };

};

export default StaticHeader;