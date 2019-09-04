import React, { useState, useEffect } from 'react';
import Axios from 'axios';
// import Moment from 'moment';
// import { Alert, Container, Row, Col, Button, Figure } from 'react-bootstrap';
import { Alert, Container, Row, Col, Button } from 'react-bootstrap';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


export default function  Dashboard(props)  {

    const userId = localStorage.getItem('p3aajjkw-id')
    const [grow, setGrow] = useState({})

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // const [logs, setLogs] = useState([])
    const [logs, setLogs] = useState([
        
    ])
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const [loading, setLoading] = useState(true)

    // async componentDidMount () => {
    useEffect(() => {
        async function fetchGrow(growId) {
            setLoading(true);
            let response = await Axios.get(`/api/grow/5d6abbd6b5f3052823de8332`);
            let data = response.data
            console.log("LOGS:" + JSON.stringify(data.dailyLogs))
            setGrow(data)
            setLoading(false)
            return data;
        }
        async function fetchGrowId() {
            setLoading(true);
            let tempGrowId
            if (props.growId) {
                tempGrowId = props.growId
            } else {
                let response = await Axios.get(`/api/user/profile`);
                let user = response.data.user
                tempGrowId = user.defaultGrow
            }
            setLoading(false)
            return tempGrowId;
        }
        
        fetchGrowId().then(growId => {
            console.log(`GROWID: ${growId}`)
            fetchGrow(growId).then(data => {
                setLogs(data.dailyLogs)
                console.log(`LOGS.data: ${JSON.stringify(data.dailyLogs)}`)
                console.log(`LOGS.grow: ${JSON.stringify(grow.dailyLogs)}`)
                console.log(`LOGS.logs: ${JSON.stringify(logs)}`)
            }).catch(err => {
                console.log(err)
            })
        })
    }, []);
    // }, [userId, grow, props.growId]);

    // async function getDidWater () {
    //     let response = await Axios.get('/api/daily/grow/5d6abbd6b5f3052823de8332',{event: 'water'});
    //     console.log(response.data)
    //     return response.data
    // }


    return (
        
        loading ?
            <LoadingSpinner />
            :
            grow ?

                <Container>
                    <Row>
                        <Col className="text-right">
                            <Button onClick={event => {
                                event.preventDefault()
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
            : 
                // the user has no grows 
                <Alert >
                    
                </Alert>
    )

}
