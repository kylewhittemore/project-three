import React, { useState, useEffect } from "react";
// import { ListItem } from "../List";
import { Row, Col, Container, Button, ListGroup } from 'react-bootstrap'
// import "./style.css";


export default function DashboardHeader({ grow }) {
    
    const [eventHistory, setEventHistory] = useState({})

    useEffect(() => {

        async function populateEventHistory (logs) {

            if (logs) {
                console.log("LOGS on entry: ", logs)
                let fakie = [{"images":[],"_id":"5d6d2371ed4cf737a713d578","date":"2019-09-30T00:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":true,"didTransplant":true,"didFlush":true,"didFlip":true,"didDefoliate":true,"notes":"should be on grow 5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6d2a24e38361390cfc4585","date":"2019-09-25T00:00:00.000Z","plantAppearance":"happy","didWater":false,"didFeed":false,"didTransplant":false,"didFlush":false,"didFlip":false,"didDefoliate":false,"notes":"","__v":0},{"images":[],"_id":"5d6d2aef63099c39217f1110","date":"2019-09-02T00:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":true,"didTransplant":true,"didFlush":true,"didFlip":true,"didDefoliate":true,"notes":"test for grow property","__v":0},{"images":[],"_id":"5d6d2cdf70e82a39a0a01313","date":"2019-09-02T00:00:00.000Z","plantAppearance":"happy","didWater":false,"didFeed":false,"didTransplant":false,"didFlush":false,"didFlip":false,"didDefoliate":false,"notes":"","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6d2e57c417633a2ebc3407","date":"2019-09-02T00:00:00.000Z","plantAppearance":"happy","didWater":false,"didFeed":false,"didTransplant":false,"didFlush":false,"didFlip":false,"didDefoliate":false,"notes":"lsjkdhflkjsdhF923740978230497SDLKFJO;SIEDFU0913478URTOI134JRFP089U7E409RJ09ERCULOsef","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc36bb65ca283a0aad62","date":"2019-08-05T04:00:00.000Z","plantAppearance":"neutral","didWater":false,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"Harvest!","grow":"5d6abbd6b5f3052823de8332","__v":0}]
                const waterHistory = fakie.filter(log => { return log.didWater === true})
                const feedHistory = logs.filter(log => { return log.didFeed === true})
                const tempHistory = {
                    didWater: waterHistory,
                    didFeed: feedHistory
                }

                console.log("HISTORY.temp:" + JSON.stringify(tempHistory))
                await setEventHistory(tempHistory)
                console.log("HISTORY:" + JSON.stringify(eventHistory))
            } else {
                console.log('Here but DATA aint')
            }
        } 

                
        if (grow) {
            console.log("DATA    ", grow.dailyLogs)
            // setLogsState(data.dailyLogs).then(console.log("fgid logs: ", logs))
            // console.log(`LOGS.data: ${JSON.stringify(data.dailyLogs)}`)
            // console.log(`LOGS.grow: ${JSON.stringify(grow.dailyLogs)}`)
            // console.log(`LOGS.logs: ${JSON.stringify(logs)}`)
            populateEventHistory (grow.dailyLogs)
            console.log("HISTORY: ", eventHistory)
        } else {
            console.log('just waitin for some grow')
        }   

    }, []);

    return (
        <Container>
                    {/* <Row>
                        <Col className="text-right">
                            <Button onClick={event => {
                                event.preventDefault()
                                props.history.push(`/newseason/?grow_id=${props.grow._id}`)
                            }} variant="outline-dark" size="sm">Edit</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2 className="text-center">{props.grow.seasonName}</h2>
                        </Col>
                    </Row> */}

                    {/* <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src={"put new image here"}
                        >
                        </Figure.Image>
                    </Figure> */}

                    {/* <Row>
                        <Col md={6} className="text-center">
                            <p><strong>Date Strated: </strong>{props.grow.dateStarted}}</p>
                        </Col>
                        <Col md={6} className="text-center">
                            <p><strong>Date Completed: </strong>{props.grow.dateCompleted}</p>
                        </Col>
                    </Row> */}

                     <Row>
                         <ListGroup>
                             {/* <ListGroup.Item><strong>Strain: </strong>{props.grow.strainName}</ListGroup.Item> */}
                             <ListGroup.Item><strong>Last Date Watered: </strong>some date here</ListGroup.Item>
                             <ListGroup.Item><strong>Last Data Fed: </strong>some date here</ListGroup.Item>
                             {/* <ListGroup.Item><strong>Last Date Watered: </strong>{eventHistory.didWater[0].date}</ListGroup.Item>
                             <ListGroup.Item><strong>Last Data Fed: </strong>{eventHistory.didFeed[0].date}</ListGroup.Item> */}
                         </ListGroup>
                     </Row>
        </Container>

    )
}