import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Row, Col, Button, Figure } from 'react-bootstrap';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'


export default function  Dashboard(props)  {

    // constructor(props) {
    //     super(props);
    //     this.state = { isOn: true };
    // };

    // State below set to blank for all neccessary database inputs.
    // state = {
    //     seasonName: "",
    //     dateStarted: "",
    //     dateCompleted: "",
    //     strainName: "",
    //     lineage: "",
    //     floweringTime: "",
    //     breeder: "",
    //     starterPlantType: "",
    //     numPlants: "",
    //     medium: "",
    //     vegLightType: "",
    //     vegLightWattage: "",
    //     flowerLightType: "",
    //     flowerLightWattage: "",
    //     lightNotes: "",
    //     canopyTechnique: "",
    //     canopyTechniqueNotes: "",
    //     coverImage: "",
    //     loading: false
    //     // user: "5d60ad3ce54ff902983c41dd"
    //     // redirect: false
    // };

    const userId = localStorage.getItem('p3aajjkw-id')

    const [grow, setGrow] = useState({})
    const [loading, setLoading] = useState(true)

    const events = {
        lastWater: "",
        lastFeed: ""
    }

    useEffect(() => {
        async function fetchGrow(growId) {
            setLoading(true);
            let response = await Axios.get(`/api/grow/${growId}`);
            let data = response.data
            console.log(JSON.stringify(data))
            setLoading(false)
            return data;
        }
        async function fetchUser() {
            setLoading(true);
            let response = await Axios.get(`/api/user/profile`);
            let user = response.data.user
            console.log("USER: " + JSON.stringify(user))
            setLoading(false)
            return user;
        }
        
        // fetchGrows().then(data => {
        //     setGrows(data)
        // }).catch(err => {
        //     console.log(err)
        // })
        // fetchUser().then(user => {
        //     setUser(user.user)
        // }).catch(err => {
        //     console.log(err)
        // })
        if (props.growId) {
            fetchGrow(props.growId).then(data => {
                setGrow(data)
            }).catch(err => {
                console.log(err)
            })
        } else {
            fetchUser().then(user => {
                let growId = user.defaultGrow
                fetchGrow(growId).then(data => {
                    setGrow(data)
                }).catch(err => {
                    console.log(err)
                })
            }).catch(err => {
                console.log(err)
            })
        }
        console.log(`PROPS: ${JSON.stringify(props)}`)
        // setLoading(false)
    }, [userId]);


    // async componentDidMount() {
    //     this.setState({ loading: true })
    //     let response = await Axios.get(`/api/grow/${this.props.growId}`);
    //     this.setState({ loading: false })
    //     console.log("componentDidMount:" , response);
    //     let data = response.data;
    //     this.setState({
    //         seasonName: data.seasonName,
    //         dateStarted: Moment(data.dateStarted.slice(0, 10)).format("MM-DD-YYYY"),
    //         dateCompleted: Moment(data.dateCompleted.slice(0, 10)).format("MM-DD-YYYY"),
    //         strainName: data.strainName,
    //         lineage: data.lineage,
    //         floweringTime: data.floweringTime,
    //         breeder: data.breeder,
    //         starterPlantType: data.starterPlantType,
    //         numPlants: data.numPlants,
    //         medium: data.medium,
    //         vegLightType: data.vegLightType,
    //         vegLightWattage: data.vegLightWattage,
    //         flowerLightType: data.flowerLightType,
    //         flowerLightWattage: data.flowerLightWattage,
    //         lightNotes: data.lightNotes,
    //         canopyTechnique: data.canopyTechnique,
    //         canopyTechniqueNotes: data.canopyTechniqueNotes,
    //         coverImage: data.coverImage
    //     });
    //     console.log("DATA", data.coverImage)
    // };

   

        return (
            
                loading ?
                    <LoadingSpinner />
                    :
                    <Container>
                        <Row>
                            <Col className="text-right">
                                <Button onClick={event => {
                                    event.preventDefault()
                                    // console.log("history", props.history)
                                    props.history.push(`/newseason/?grow_id=${props.growId}`)
                                }} variant="outline-dark" size="sm">Edit</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h2 className="text-center">{grow.seasonName}</h2>
                            </Col>
                        </Row>

                        {/* <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={"put new image here"}
                            >
                            </Figure.Image>
                        </Figure> */}

                        <Row>
                            <Col lg={6} className="text-center">
                                <p><strong>Date Started: </strong>{grow.dateStarted}</p>
                            </Col>
                            <Col lg={6} className="text-center">
                                <p><strong>Date Completed: </strong>{grow.dateCompleted}</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={3} className="text-center">
                                <p><strong>Breeder: </strong>{grow.breeder}</p>
                            </Col>
                            <Col lg={3} className="text-center">
                                <p><strong>Strain: </strong>{grow.strainName}</p>
                            </Col>
                            <Col lg={3} className="text-center">
                                <p><strong>Lineage: </strong>{grow.lineage}</p>
                            </Col>
                            <Col lg={3} className="text-center">
                                <p><strong>Flowering Time: </strong>{grow.floweringTime} Days</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={4} className="text-center">
                                <p><strong>Starter Plant Type: </strong>{grow.starterPlantType}</p>
                            </Col>
                            <Col lg={4} className="text-center">
                                <p><strong>Number of Plants: </strong>{grow.numPlants}</p>
                            </Col>
                            <Col lg={4} className="text-center">
                                <p><strong>Medium: </strong>{grow.medium}</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={3} className="text-center">
                                <p><strong>Veg Light Type: </strong>{grow.vegLightType}</p>
                            </Col>
                            <Col lg={3} className="text-center">
                                <p><strong>Veg Light Wattage: </strong>{grow.vegLightWattage} Watts</p>
                            </Col>
                            <Col lg={3} className="text-center">
                                <p><strong>Flower Light Type: </strong>{grow.flowerLightType}</p>
                            </Col>
                            <Col lg={3} className="text-center">
                                <p><strong>Flower Light Wattage: </strong>{grow.flowerLightWattage} Watts</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="text-center">
                                <p><strong>Lighting Notes: </strong>{grow.lightNotes}</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={6} className="text-center">
                                <p><strong>Canopy Technique: </strong>{grow.canopyTechnique}</p>
                            </Col>
                            <Col lg={6} className="text-center">
                                <p><strong>Canopy Technique Notes: </strong>{grow.canopyTechniqueNotes}</p>
                            </Col>
                        </Row>

                    </Container>
        )

    }
