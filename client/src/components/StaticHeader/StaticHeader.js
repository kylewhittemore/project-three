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
                            <Col md="3" className="my-auto p-0 text-center">
                                <Figure className="my-auto staticImage">
                                    {this.state.coverImage ?
                                        <Figure.Image
                                            // width={171}
                                            // height={180}
                                            className="img-fluid img-thumbnail m-0"
                                            alt="171x180"
                                            src={`https://project-three-logger-photos.s3.amazonaws.com/${this.state.coverImage}`}
                                        >
                                        </Figure.Image>
                                        :
                                        <></>
                                    }
                                </Figure>
                            </Col>

                            <Col md="9">
                                <Row>
                                    <Col xs="8" className="mx-auto text-left">
                                        <h2 className="text-capitalize">{this.state.seasonName}</h2>
                                    </Col>
                                    <Col xs="4" className="text-right">
                                        <Button className="text-right btn-success"
                                            onClick={event => {
                                                event.preventDefault()
                                                this.props.history.push(`/images/?grow_id=${this.props.growId}`)
                                            }} variant="outline-light" size="sm">Images</Button>
                                        <Button className="text-right btn-info"
                                            onClick={event => {
                                                event.preventDefault()
                                                console.log("history", this.props.history)
                                                this.props.history.push(`/newseason/?grow_id=${this.props.growId}`)
                                            }} variant="outline-light" size="sm">Edit</Button>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md="6" className="my-auto">
                                        <p className="my-1 headerInfo"><strong className="headerInfoTitle">Started: </strong>{formatMonDateShort(this.state.dateStarted)}</p>
                                        <p className="my-1 headerInfo"><strong className="headerInfoTitle">Harvest: </strong>{formatMonDateShort(this.state.dateCompleted)}</p>
                                        <p className="my-1 headerInfo"><strong className="headerInfoTitle">Strain: </strong>{this.state.strainName}</p>
                                        <p className="my-1 headerInfo"><strong className="headerInfoTitle">Flowering Time: </strong>{`${this.state.floweringTime} Days`}</p>
                                    </Col>

                                    <Col md="6" className="my-auto">
                                        <p className="my-1 headerInfo"><strong className="headerInfoTitle">Lineage: </strong>{this.state.lineage}</p>
                                        <p className="my-1 headerInfo ellipses"><strong className="headerInfoTitle">Breeder: </strong>{this.state.breeder}</p>
                                        <p className="my-1 headerInfo"><strong className="headerInfoTitle">Canopy Technique: </strong>{this.state.canopyTechnique}</p>
                                        <p className="my-1 headerInfo"><strong className="headerInfoTitle">Starter Plant Type: </strong>{`${this.state.numPlants} ${this.state.starterPlantType} in ${this.state.medium}`}</p>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>

                        <Row>
                            <Col md="3" className="mx-auto my-auto">
                                <h5 className="text-center mb-0 pb-0"><strong>Environment and Lighting Details:</strong></h5>
                            </Col>

                            <Col md="3" className="my-auto">
                                <p className="my-1 headerInfo"><strong className="headerInfoTitle">Veg Light: </strong>{`${this.state.vegLightWattage} Watt ${this.state.vegLightType}`}</p>
                                <p className="my-1 headerInfo"><strong className="headerInfoTitle">Flower Light: </strong>{`${this.state.flowerLightWattage} Watt ${this.state.flowerLightType}`}</p>
                            </Col>

                            <Col md="3" className="my-auto">
                                <p className="my-1 headerInfo"><strong className="headerInfoTitle">Lighting Notes: </strong>{this.state.lightNotes}</p>
                                {/* <p className="notes">{this.state.lightNotes}</p> */}
                            </Col>

                            <Col md="3" className="my-auto">
                                <p className="my-1 headerInfo"><strong className="headerInfoTitle">Canopy Notes: </strong>{this.state.canopyTechniqueNotes}</p>
                                {/* <p className="notes">{this.state.canopyTechniqueNotes}</p> */}
                            </Col>

                        </Row>

                    </Container>
                }
            </div>
        )

    };

};

export default StaticHeader;